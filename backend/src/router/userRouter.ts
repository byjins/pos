import express, {Router} from 'express';
import dotenv from "dotenv";
import {Login, Register} from "../controller/user/userController";

dotenv.config();
const router: Router = express.Router();

router.get('/register', Register); // 회원가입
router.post('/login', Login); // 로그인

export default router;
