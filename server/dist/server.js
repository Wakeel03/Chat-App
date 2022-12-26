"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.set("port", PORT);
let http = require("http").Server(app);
let io = require("socket.io")(http);
app.use(express.static(path.resolve("./client/styles")));
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./client/index.html"));
});
io.on("connection", (socket) => {
    console.log("Socket connection established...");
    socket.on("message", (message) => {
        console.log(message);
        socket.broadcast.emit("message", message);
    });
});
const server = http.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
//# sourceMappingURL=server.js.map