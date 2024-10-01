import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@store/user.ts";

const AuthProvider = () => {
  // 이곳에서 토큰의 유효기간 확인
  const token = useAuthStore((state) => state.token);

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default AuthProvider;
