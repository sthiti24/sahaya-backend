const mongoose = require("mongoose");
const mongodb = require("mongodb");

const db_connection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MONGODB config ", connect.connection.host);
  } catch (error) {
    console.log("Error:", error.message);
    throw error;
  }
};

module.exports = db_connection;
