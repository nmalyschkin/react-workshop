const path = require("path");
const express = require("express");

const app = express();

app.use("/public", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(3001, () => {
    console.log("server running on http://localhost:3000");
});
