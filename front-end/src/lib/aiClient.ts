import type { Page, Story } from "../data/contexts/storyData";

export interface AiClient {
    generateStory(story: Story | null, choice: string): Promise<Page>;
}

export function getAiClient() {
    return mockAIClient;
}

export const mockAIClient: AiClient = {
    generateStory(story: Story | null, choice: string): Promise<Page> {
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
                    } as Page);
                });
        });
    },
};
