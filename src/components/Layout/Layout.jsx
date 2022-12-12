import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper, Main } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <header>
        <ul>
          <li>
            <NavLink to={'/'} className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'movies'} className="link">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>

      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Wrapper>
  );
};

export default Layout;
