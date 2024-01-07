const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

require("dotenv").config();

const app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
};
app.use(cors(corsOptions));

app.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
});

app.listen(3001, () => {
    console.log("\nServer Ready\n> Port : 3001");
});
