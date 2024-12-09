const mongoose  = require("mongoose");

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://dipanshunita:oRHBHIwDJw3KZT8t@nodejs.1i306.mongodb.net/nodejs");
};

module.exports = connectDB;

