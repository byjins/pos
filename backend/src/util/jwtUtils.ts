import {NextFunction, Request, Response} from "express";
import jwt, {JwtPayload, verify} from "jsonwebtoken";
import dotenv from "dotenv";
import {Token} from "../model/token/tokenSchema";

export interface TokenPayload extends JwtPayload {
  id: string;
  role: string;
}

interface RefreshTokenVerifyResponse {
  use: boolean,
  token: string | string[],
  message: string;
}

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

/*.AccessToken 생성 */
export const GeneratorAccessToken = (id: string, role: string):String => {
  const payload = {id: id, role: role};
  return "Bearer " + jwt.sign(payload, SECRET_KEY!, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
}

/*.RefreshToken 생성 */
export const GeneratorRefreshToken = (id: string, role: string):String => {
  const payload = {id: id, role: role};
  return jwt.sign(payload, SECRET_KEY!, {
    algorithm: 'HS256',
    expiresIn: '30d',
  });
}

/* AccessToken 검증 */
export const AccessTokenVerify = (token: string) => {
  try {
    const decode = jwt.verify(token, SECRET_KEY!) as TokenPayload;
    return {use: true, id: decode.id, role: decode.role};
  } catch (error) {
    return { use: false, message: (error as Error).message};
  }
}


/* RefreshToken 검증 */
export const RefreshTokenVerify = async (token: string | string[], id: string): Promise<RefreshTokenVerifyResponse> => {
  const getToken = await Token.findOne({id: id});
  if(getToken) {
    if(token == getToken.refreshToken) {
      try {
        jwt.verify(token, SECRET_KEY!);
        return {use: true, token: token, message: "Tokens Available"};
      } catch (error) {
        return {use: false, token: token, message: (error as Error).message};
      }
    } else {
      return {use: false, token: token, message: "Invalid token value."};
    }
  }
  return {use: false, token: token, message: "Token does not exist"};
}

/* Authentication 필터 */
export const AuthenticationFilter = (req: Request, res: Response, next:NextFunction): void => {
  if(req.headers.authorization) {
    const accessToken = req.headers.authorization.split('Bearer ') [1];
    const result = AccessTokenVerify(accessToken);
    if(result.use) {
      req.body.result = {id: result.id, role: result.role};
      next();
    } else {
      res.status(401).send(result.message);
    }
  }
}
