import { Request, Response } from "express";
import fs from "fs";
import path from "path";

import { ServerState } from "@/types/types";

class ServerManager {
    private serverFile: string;

    constructor() {
        this.serverFile = path.join(__dirname, "../data/serverNbot.json");
    }

    getServersHandler(req: Request, res: Response): void {
        if (fs.existsSync(this.serverFile) && fs.statSync(this.serverFile).size > 0) {
            fs.readFile(this.serverFile, 'utf-8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ message: "Unable to read the data file!" });
                    return;
                }
                const serverList: any[] = JSON.parse(data);
                res.status(200).json(serverList);
            });
        }
        else {
            res.status(400).json({ message: "No servers added yet!" });
        }
    }

    addServerHandler(req: Request, res: Response): void {
        const newServer: ServerState = req.body;

        if (fs.existsSync(this.serverFile) && fs.statSync(this.serverFile).size > 0) {
            fs.readFile(this.serverFile, 'utf-8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ message: "Unable to read the data file!" });
                    return;
                }
                const serverList: ServerState[] = JSON.parse(data);
                serverList.push(newServer);
                fs.writeFile(this.serverFile, JSON.stringify(serverList), (err) => {
                    if (err) {
                        console.error(err);
                        res.status(500).json({ message: "Unable to write the data file!" });
                        return;
                    }
                    res.status(200).json({ message: "Server added successfully!" });
                });
            });
        } else {
            fs.writeFile(this.serverFile, JSON.stringify([newServer]), (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ message: "Unable to write the data file!" });
                    return;
                }
                res.status(200).json({ message: "Server added successfully!" });
            });
        }
    }
}

export default ServerManager;