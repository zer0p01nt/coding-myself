import { NavLink } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import { axiosInstance } from "../api/axiosInstance";
import axios from "axios";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const unsetAuth = useAuthStore((state) => state.unsetAuth);
  const handleLogout = async () => {
    try {
      const { status } = await axiosInstance.post("/logout");
      if (status === 200) {
        // 로그아웃 성공
        unsetAuth();
      } else {
        throw new Error("로그아웃에 실패했습니다.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message ?? error.message;
        alert(msg);
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 이유로 실패했습니다.");
      }
    }
  };

  return (
    <header className='page__header flex justify-between items-center py-12 px-0'>
      <h1 className='page__logo text-2xl font-bold'>
        <NavLink
          to='/'
          className='page__logo-link text-base text-primary border-0 cursor-pointer'
        >
          MY
        </NavLink>
      </h1>
      <nav className='page__navigation'>
        <ul className='flex items-center justify-around gap-4.5'>
          <li className='page__nav-item'>
            <NavLink
              to='/write'
              className='page__logo-link text-base text-primary border-0 cursor-pointer'
            >
              글쓰기
            </NavLink>
          </li>
          <li className='page__nav-item'>
            {!user ? (
              <NavLink
                to='/auth'
                className='page__logo-link text-base text-primary border-0 cursor-pointer'
              >
                인증
              </NavLink>
            ) : (
              <button
                className='page__logo-link text-base text-primary border-0 cursor-pointer'
                onClick={handleLogout}
              >
                로그아웃
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
