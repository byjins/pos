export interface UserType {
  id: string,
  pw: string,
  email: string,
  phone: string,
  role: string,
}
/* 회원가입 타입 */
export interface RegisterParams {
  id: string,
  pw: string,
  email: string,
  phone: string
}

/* 로그인 타입 */
export interface LoginParams {
  id: string,
  pw: string,
}
