import {NextFunction, Request, Response} from "express";
import {User} from "../../model/user/userSchema";
import {LoginParams, RegisterParams} from "../../model/user/userTypes";
import {AccessTokenVerify, GeneratorAccessToken, GeneratorRefreshToken, RefreshTokenVerify, TokenPayload} from "../../util/jwtUtils";
import {Token} from "../../model/token/tokenSchema";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;


/* Refresh Token 재발급 */
export const VerifyRefresh = async (req: Request, res: Response, next:NextFunction): Promise<void> => {
  if(req.headers["authorization"] && req.headers["refresh"]) {
    const accessToken = req.headers.authorization.split('Bearer ') [1];
    const refreshToken = req.headers["refresh"];
    const authResult = AccessTokenVerify(accessToken);
    const decode = jwt.verify(accessToken, SECRET_KEY!) as TokenPayload;

    if(decode === null) {
      res.status(401).send("인증되지 않음!");
    }

    const refreshResult = await RefreshTokenVerify(refreshToken, authResult.id as string);

    if(!authResult.use && authResult.message === 'jwt expired') {
      /* 1. accessToken 만료 / refreshToken 만료 ==> 재 로그인 필요 */
      if(!refreshResult.use) {
        res.status(401).send("RefreshToken 사용 불가!");
      } else {
        /* 2. accessToken 만료 / refreshToken 살아있음 ==> 새로운 accessToken 발급 */
        const newAccessToken = GeneratorAccessToken(decode.id, decode.role);
        res.status(200).send({ accessToken: newAccessToken });
      }
    } else {
      /* 3. accessToken 살아있는 경우 */
      res.status(400).send("AceessToken 사용 가능!");
    }
  } else {
    res.status(400).send("AccessToken 또는 RefreshToken을 찾을 수 없음!");
  }
}


/* 회원가입 */
export const Register = async (req: Request, res: Response, next: NextFunction) => {
  const regiUser: RegisterParams = req.body;
  let user = await User.findOne({ id: regiUser.id });

  try{
    if(user) {
      res.status(400).send("회원가입 실패! (아이디 중복)");
    } else {
      user = new User(regiUser);
      user.role = "ROLE_USER";
      await user.save();
      res.status(200).send("회원가입 성공!");
    }

  } catch (error) {
    console.log(error);
    res.status(500).send((error as Error).message);
  }
}

/* 로그인 */
export const Login = async (req: Request, res: Response, next: NextFunction) => {
  const loginParams: LoginParams = req.body;
  const user = await User.findOne({ id: loginParams.id });

  if(user != null) {
    const accessToken: String = GeneratorAccessToken(user.id, user.role);
    const refreshToken: String = GeneratorRefreshToken(user.id, user.role);

    if(user.pw !== loginParams.pw) {
      res.status(400).send("로그인 실패!");
    } else {
      let findToken = await Token.findOne({id: user.id});
      const token = new Token({id: loginParams.id, refreshToken: refreshToken});
      if(findToken) {
        await findToken.updateOne({refreshToken: refreshToken});
      } else {
        await token.save();
      }
      res.send({ accessToken, refreshToken });
    }
  }
}


/* 로그아웃 */
export const Logout = async (req:Request, res:Response, next:NextFunction) => {};
