import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DB_URI = process.env.MONGODB_URI;

if (!DB_URI) {
  throw new Error("DB URL 오류!");
}

const dbConnection = mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("MongoDB 연결 성공");
    return mongoose.connection;
  })
  .catch((err) => {
    console.log("MongoDB 연결 실패 => " + err);
  });

export default dbConnection;
