const express = require("express");
const { registerUser, authUser, allUsers} = require("../controllers/userControllers");

const userRoutes = express.Router();

userRoutes.route("/").post(registerUser).get(allUsers);
userRoutes.post('/login', authUser);



module.exports = userRoutes;