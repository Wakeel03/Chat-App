import * as express from "express"
import * as path from "path"
import { Socket } from "socket.io"

const app = express()

const PORT = process.env.PORT || 3000
app.set("port", PORT)

let http = require("http").Server(app)
let io = require("socket.io")(http)

app.use(express.static(path.resolve("./client/styles")))

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve("./client/index.html"))
})

io.on("connection", (socket: Socket) => {
    console.log("Socket connection established...")

    socket.on("message", (message: String) => {
        console.log(message)
    
        socket.broadcast.emit("message", message)
    })
})

const server = http.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})

