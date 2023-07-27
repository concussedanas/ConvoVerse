/* const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1:27017/Database";
const connectDB = async() => {
    try{
        const conn = await mongoose.connect(MONGO_URI, {});

        console.log('MongDB Connected: ' + conn.connection.host);
        
    } catch (error) {
        console.log("Error: " + error.message);
        process.exit();
    }
};

module.exports = connectDB; */