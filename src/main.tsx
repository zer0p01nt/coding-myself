import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import "./css/index.css";
import { axiosInstance } from "./api/axiosInstance";
import { useAuthStore } from "./stores/useAuthStore";

const refreshUser = async () => {
  try {
    const { data, status } = await axiosInstance.post("/token");
    if (status === 200) {
      useAuthStore.setState({ user: data.user, accessToken: data.accessToken });
    } else {
      throw new Error("Failed to refresh user");
    }
  } catch {
    useAuthStore.setState({ user: null, accessToken: null }); // 유효하지 않은 토큰 -> 토큰 삭제, 사용자 상태 초기화
  }
};

const storage = JSON.parse(sessionStorage.getItem("auth-storage") || "{}"); // 세션 스토리지에 사용자 정보가 있다면
if (storage?.state?.user) {
  refreshUser(); // 액세스 토큰 재발급
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
