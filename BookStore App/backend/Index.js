import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

import bookRoute from "./route/book.route.js";

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB...");
} catch (error) {
  console.log("Error: ", error);
}

// Defining routes
app.use("/book", bookRoute)

app.listen(PORT, () => {
  console.log(`Server is listning listening on port ${PORT}`);
});
