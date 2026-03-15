const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUrl = process.env.mongoUrl || process.env.MONGO_URL;

  if (!mongoUrl) {
    throw new Error("MongoDB connection failed: MONGO_URL is not set");
  }

  try {
    await mongoose.connect(mongoUrl, {
      autoIndex: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};

module.exports = connectDB;
