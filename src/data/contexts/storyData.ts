export interface Story {
    pages: Page[];
}
export interface Page {
    content: string;
    options?: string[];
    selectedOption?: string | null;
}

let story: Story | null = null;

export function getStory() {
    return story;
}

export async function loadStory(id: string): Promise<Story | null> {
    return new Promise((resolve) => {
        // Simulate an API call
        setTimeout(() => {
            resolve(story);
        }, 1000);
    });
}

export async function saveStory() {
    return new Promise((resolve) => {
        // Simulate an API call
        setTimeout(() => {
            resolve(story);
        }, 1000);
    });
}
