import Anthropic from "@anthropic-ai/sdk";

const anthropicClient = new Anthropic();

export interface Story {
  pages: Page[];
}
export interface Page {
  content: string;
  options?: string[];
  selectedOption?: string | null;
}

export interface AiClient {
  generateStory(story: Story | null, choice: string): Promise<object>;
  generateStoryStream(story: Story | null, choice: string): ReadableStream;
}

export function getAiClient() {
  return mockAIClient;
}

const claudAIClient: AiClient = {
  generateStory(story, choice) {
    const prompt =
      `You are a choose your own adventure engine. Fantasy Themed, political intrigue. Output a succinct narrative and 3 options denoted by [#] where # is the option number.
    
      [Scene]: background scene information not shown to player
      [Narrative]: narrative text shown to player
      [1]: option 1
      [2]: option 2
      [3]: option 3


    The current scenario is a challenge 5 (1 is arbitrary, 10 is godlike).
    The story health is at 6 / 10.

    The option modifiers are:
    [1]: +2
    [2]: +0
    [3]: -1
    (modifiers must remain hidden from player)
    `;

    return new Promise((resolve) => {
      anthropicClient.messages.create({
        model: "claude-opus-5",
        max_tokens: 1024,
        messages: [{
          role: "user",
          content: prompt,
        }],
      }).then((msg) => {
        let content = "";

        for (const block of msg.content) {
          if (block.type === "text") {
            content += block.text;
            console.log(block.text);
          }
        }

        resolve({
          content,
          options: ["option1", "option2"],
        });

        // resolve(JSON.stringify({
        //   content,
        //   options: ["option1", "option2"],
        // } as Page));
      });
    });
  },
  generateStoryStream(story, choice) {
    return new ReadableStream();
  },
};

const mockAIClient: AiClient = {
  generateStory(story: Story | null, choice: string): Promise<object> {
    return new Promise((resolve) => {
      fetch("https://dummyjson.com/quotes/random/5")
        .then((response) => response.json())
        .then((data: { quote: string }[]) => {
          const options = [
            data[1].quote,
            data[2].quote,
            data[3].quote,
            data[4].quote,
          ];
          resolve({
            content: data[0].quote,
            options: options.slice(
              0,
              2 + Math.random() * (options.length - 1),
            ),
          });
        });
    });
  },
  generateStoryStream(story, choice) {
    return new ReadableStream();
  },
};
