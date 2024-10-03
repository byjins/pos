import mongoose, {Mongoose} from "mongoose";

const TokenSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  }
});

export const Token = mongoose.model("Token", TokenSchema);
