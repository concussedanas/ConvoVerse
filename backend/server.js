const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");


dotenv.config();
connectDB(); //added

const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, console.log("Server Started on PORT " + PORT));

// testing updating through VS v3
