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

let retry = false; // 액세스 토큰 재요청이 무한 루프에 빠지는 것 방지

// 액세스 토큰 재요청
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403 && !retry) {
      retry = true;
      try {
        const { data, status } = await axiosInstance.post("/token");
        if (status == 200) {
          useAuthStore.setState({
            user: data.user,
            accessToken: data.accessToken,
          });
          retry = false;
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.accessToken}`;
          return axiosInstance(originalRequest);
        } else {
          throw new Error("토큰 업데이트 실패");
        }
      } catch {
        useAuthStore.setState({ user: null, accessToken: null });
      }
    }
    return Promise.reject(error);
  }
);
