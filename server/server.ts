import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";

import ServerManager from "./src/serverManager";
import { pingHandler } from "./src/pingManager";

dotenvConfig();

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.listen(3001, (): void => {
    console.log("\nServer Ready\n> Port : 3001");
});

app.get("/ping", (req: Request, res: Response): void => {
    pingHandler(req, res);
});

const serverManager = new ServerManager();

app.get("/getServers", (req: Request, res: Response): void => {
    serverManager.getServersHandler(req, res);
});

app.post("/addServer", (req: Request, res: Response): void => {
    serverManager.addServerHandler(req, res);
});
