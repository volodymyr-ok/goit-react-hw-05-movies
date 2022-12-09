import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'movies'}>Movies</NavLink>
          </li>
        </ul>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
