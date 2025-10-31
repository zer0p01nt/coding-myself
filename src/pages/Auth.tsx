import { useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

export default function Auth() {
  const [pageType, setPageType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const handlePageChange = (type: string) => {
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setUsername("");
    setPageType(type);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (email === "" || password === "" || username === "") {
        alert("모든 항목을 입력해 주세요.");
        return;
      }
      if (password !== passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }
      const { data } = await axiosInstance.post("/register", {
        email,
        password,
        username,
      });
      if (data) {
        alert("회원가입을 완료했습니다.\n로그인 후 이용해 주세요.");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setUsername("");
        setPageType("login");
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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/login", {
        email,
        password,
      });
      setAuth(data.user, data.accessToken);
      navigate("/");
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
    <main className='page__main flex flex-col items-center justify-center my-12 mx-0 min-h-[calc(100vh-131px-128px-96px)] min-[320px]:min-h-[calc(100vh-114px-110px-96px)] sm:min-h-[calc(100vh-131px-128px-96px)]'>
      <article className='page-auth flex justify-center items-center'>
        <section className='page-auth__container w-full max-w-100 bg-white rounded-lg shadow-md overflow-hidden'>
          <nav className='page-auth__toggle flex bg-black'>
            <button
              id='login-tab'
              className={`page-auth__toggle-button flex-1 p-[15px] border-0 bg-black text-white cursor-pointer transition duration-300 ${
                pageType === "login" && "bg-secondary-black"
              } `}
              onClick={() => handlePageChange("login")}
            >
              로그인
            </button>
            <button
              id='signup-tab'
              className={`page-auth__toggle-button page-auth__toggle-button--active flex-1 p-[15px] border-0 bg-black text-white cursor-pointer transition duration-300 ${
                pageType === "register" && "bg-secondary-black"
              } `}
              onClick={() => handlePageChange("register")}
            >
              회원가입
            </button>
          </nav>

          <div className='page-auth__form-section p-[30px]'>
            <form
              className={`auth-form block ${pageType !== "login" && "hidden"}`}
              id='login-form'
              onSubmit={handleLogin}
            >
              <label
                htmlFor='login-email'
                className='sr-only text-sm mb-2 inline-block'
              >
                이메일
              </label>
              <input
                type='email'
                id='login-email'
                className='auth-form__input w-full p-3 mb-[15px] border border-[#ddd] rounded-sm'
                placeholder='이메일'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label
                htmlFor='login-password'
                className='sr-only text-sm mb-2 inline-block'
              >
                비밀번호
              </label>
              <input
                type='password'
                id='login-password'
                className='auth-form__input w-full p-3 mb-[15px] border border-[#ddd] rounded-sm'
                placeholder='비밀번호'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type='submit'
                className='auth-form__submit w-full p-3 bg-black text-white border-0 rounded-sm cursor-pointer transition duration-300 hover:bg-secondary-black'
              >
                로그인
              </button>
            </form>

            <form
              className={`auth-form block ${
                pageType !== "register" && "hidden"
              }`}
              id='signup-form'
              onSubmit={handleSignup}
            >
              <label
                htmlFor='signup-email'
                className='sr-only text-sm mb-2 inline-block'
              >
                이메일
              </label>
              <input
                type='email'
                id='signup-email'
                className='auth-form__input w-full p-3 mb-[15px] border border-[#ddd] rounded-sm'
                placeholder='이메일'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor='signup-name'
                className='sr-only text-sm mb-2 inline-block'
              >
                이름
              </label>
              <input
                type='text'
                id='signup-name'
                className='auth-form__input w-full p-3 mb-[15px] border border-[#ddd] rounded-sm'
                placeholder='이름'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label
                htmlFor='signup-password'
                className='sr-only text-sm mb-2 inline-block'
              >
                비밀번호
              </label>
              <input
                type='password'
                id='signup-password'
                className='auth-form__input w-full p-3 mb-[15px] border border-[#ddd] rounded-sm'
                placeholder='비밀번호'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label
                htmlFor='signup-confirm-password'
                className='sr-only text-sm mb-2 inline-block'
              >
                비밀번호 확인
              </label>
              <input
                type='password'
                id='signup-confirm-password'
                className='auth-form__input w-full p-3 mb-[15px] border border-[#ddd] rounded-sm'
                placeholder='비밀번호 확인'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />

              <button
                type='submit'
                className='auth-form__submit w-full p-3 bg-black text-white border-0 rounded-sm cursor-pointer transition duration-300 hover:bg-secondary-black'
              >
                회원가입
              </button>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
