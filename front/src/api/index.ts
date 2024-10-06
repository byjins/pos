// src/api/axiosInstance.js
import axios from "axios";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // 기본 URL 설정
  timeout: 10000, // 요청 타임아웃 (10초)
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 설정 (선택 사항)
axiosInstance.interceptors.request.use(
  (config) => {
    // 요청 전 설정할 부분 (예: 토큰 추가)
    const token = localStorage.getItem("token"); // 예: 로컬 스토리지에서 토큰 가져오기
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정 (선택 사항)
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터를 가공하거나, 에러 처리를 하기 전에 데이터 반환
    return response.data;
  },
  (error) => {
    // 응답 에러 처리
    const { response } = error;
    // 여기서 무언가 처리 ?
    if (response) {
      // 서버 응답이 있는 경우
      console.error("Error Response:", response);
      // 에러 메시지 처리
    } else {
      // 서버가 응답하지 않는 경우
      console.error("Error Message:", error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
