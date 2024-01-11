import { spawn, ChildProcessWithoutNullStreams } from "child_process";
import { Request, Response } from "express";

export function pingHandler(req: Request, res: Response): void {
    res.status(200).json({ message: "pong" });

    // const process: ChildProcessWithoutNullStreams = spawn("cmd", ["/c", "start", "node", "child.js"]);
    // process.on("error", (err: Error) => {
    //     console.error(err);
    // });
    // process.on("exit", (code: number | null, signal: NodeJS.Signals | null) => {
    //     console.log(
    //         `Child process exited with code ${code} and signal ${signal}`
    //     );
    // });
}