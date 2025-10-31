import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className='flex justify-between items-center py-12 px-0'>
      <h1 className='text-2xl font-bold'>
        <NavLink
          to='/'
          className='text-base text-primary border-0 cursor-pointer'
        >
          MY
        </NavLink>
      </h1>
      <nav className='page__navigation'>
        <ul className='flex items-center justify-around gap-[1.125rem]'>
          <li className='page__nav-item'>
            <NavLink
              to='/write'
              className='text-base text-primary border-0 cursor-pointer'
            >
              글쓰기
            </NavLink>
          </li>
          <li className='page__nav-item'>
            <NavLink
              to='/auth'
              className='text-base text-primary border-0 cursor-pointer'
            >
              인증
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
