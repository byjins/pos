import express, {Request, Response, NextFunction, Router} from 'express';
import {User} from "../model/userSchema";


/* 회원가입 타입 */
interface RegisterParams {
  id: string,
  pw: string,
  email: string,
  phone: string
}

/* 로그인 타입 */
interface LoginParams {
  id: string,
  pw: string,
}

const router: Router = express.Router();


/* 회원가입 */
router.get('/register', async (req: Request, res: Response, next: NextFunction) => {
  const user = new User(req.body);

  try{
    if(user != null) {
      await user.save();
      res.status(200).send("회원가입 완료!")
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("회원가입 실패!");
  }
});

/* 로그인 */
router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  const {id, pw}: LoginParams = req.body;
  const user = await User.findOne({id});

  if(user != null) {
    if(user.pw !== pw) {
      res.status(400).send("로그인 실패!");
    } else {
      res.send("로그인 완료!");
    }
  }
});

export default router;
