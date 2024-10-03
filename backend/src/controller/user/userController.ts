import {NextFunction, Request, Response} from "express";
import {User} from "../../model/user/userSchema";
import {LoginParams, RegisterParams} from "../../model/user/userTypes";
import {GeneratorAccessToken, GeneratorRefreshToken} from "../../util/jwtUtils";
import {Token} from "../../model/token/tokenSchema";

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
