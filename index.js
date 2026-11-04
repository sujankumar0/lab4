const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello! My first DevOps application is running!");
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Application running on port 3000");
});

