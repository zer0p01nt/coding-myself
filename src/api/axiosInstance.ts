import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// 요청을 보내기 전에 실행할 함수 등록
axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`; // 액세스 토큰이 필요한 모든 API 요청에 토큰 자동 포함
  }
  return config;
});
