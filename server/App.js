// import { createServer } from "http";
// import { Server } from "socket.io";
// import { v4 as uuidv4 } from "uuid";

const { createServer } = require("http");
const { Server } = require("socket.io");
const { v4 } = require("uuid");

let uuidv4 = v4;

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    headers: {
      "Access-Control-Allow-Origin ": "*",
    },
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("Invalid UserName"));
  }

  socket.username = username;
  socket.userId = uuidv4();
  next();
});

io.on("connection", async (socket) => {
  let users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userId: socket.userId,
      username: socket.username,
    });
  }
  socket.emit("users", users);

  socket.emit("session", { userId: socket.userId, username: socket.username });

  socket.broadcast.emit("user connected", { userId: socket.userId, username: socket.username });

  //new Message

  socket.on("new message", (message) => {
    socket.broadcast.emit("new message", {
      userId: socket.userId,
      username: socket.username,
      message,
    });
  });
});

console.log("Listing port 4000.........");
httpServer.listen(process.env.PORT || 4000);
