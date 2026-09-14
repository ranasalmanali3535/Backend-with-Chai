import dotenv from 'dotenv';
import connectDB from "./db/db.js";

import dns from "dns";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log("Database Connection Failed: ", error);
  });

dotenv.config({
})


connectDB();