export default function Auth() {
  return (
    <main className='page__main flex flex-col items-center justify-center my-12 mx-0 min-h-[calc(100vh-131px-128px-96px)]'>
      <article className='page-auth flex justify-center items-center'>
        <section className='page-auth__container w-full max-w-100 bg-white rounded-lg shadow-md overflow-hidden'>
          <nav className='page-auth__toggle flex bg-black'>
            <button
              id='login-tab'
              className='page-auth__toggle-button page-auth__toggle-button--active flex-1 p-[15px] border-0 bg-black text-white cursor-pointer transition duration-300 active:bg-secondary-black'
            >
              로그인
            </button>
            <button
              id='signup-tab'
              className='page-auth__toggle-button flex-1 p-[15px] border-0 bg-black text-white cursor-pointer transition duration-300 active:bg-secondary-black'
            >
              회원가입
            </button>
          </nav>

          <div className='page-auth__form-section p-[30px]'>
            {/* 추후 className='hidden active:block' 으로 변경 */}
            <form className='auth-form auth-form--active block' id='login-form'>
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
                required
              />

              <button
                type='submit'
                className='auth-form__submit w-full p-3 bg-black text-white border-0 rounded-sm cursor-pointer transition duration-300 hover:bg-secondary-black'
              >
                로그인
              </button>
            </form>

            {/* 추후 className='hidden active:block' 으로 변경 */}
            <form className='auth-form hidden' id='signup-form'>
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
