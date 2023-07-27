const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");

const app = express();
dotenv.config();
// connectDB(); //added

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log();
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT;

app.listen(PORT, console.log("Server Started on PORT " + PORT));

// testing updating through VS v3
