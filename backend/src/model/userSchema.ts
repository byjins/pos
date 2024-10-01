import mongoose, {models} from "mongoose";

/**
 * type: 변수형
 * required: 필수 값 설정 (true: 필수, false: 필수아님)
 * unique: 중복허용 여부
 */
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  pw: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  }
});
export const User = mongoose.model("User", UserSchema);
