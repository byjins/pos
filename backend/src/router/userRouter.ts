import express, {Router} from 'express';
import dotenv from "dotenv";
import {Login, Logout, Register, VerifyRefresh} from "../controller/user/userController";

dotenv.config();
const router: Router = express.Router();

router.get('/refresh', VerifyRefresh);
router.post('/register', Register); // 회원가입
router.post('/login', Login); // 로그인
router.post('/logout', Logout) // 로그아웃

export default router;
