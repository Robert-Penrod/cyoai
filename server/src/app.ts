import cors from "cors";
import express, { type Express, type Request, type Response } from "express";
import { getAiClient } from "./aiClient.ts";

const app: Express = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173" }));

const aiClient = getAiClient();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/story/generate-page-stream", async (req: Request, res: Response) => {
    //const page = await aiClient.generateStoryStream(null, "");
    //res.send(page);
    res.setHeader("Content-Type", "text/event-stream");
    const stream = aiClient.generateStoryStream(null, "");
    for await (const chunk of stream) {
        res.write(`data: ${JSON.stringify(chunk)}\n\n`);
    }
    res.end();
});

app.listen(3000);
