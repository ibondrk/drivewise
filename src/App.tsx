import React, { useRef, useEffect } from 'react';
import './styles/App.scss';
import cn from 'classnames';

import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { HamburgerMenu } from './components/HamburgerMenu';

import { useAppSelector, useAppDispatch } from './redux/hooks';
import * as menuActions from './redux/featcher/menu';
import { setScreenWidth } from './redux/featcher/screenWidth';

function App() {
  const dispatch = useAppDispatch();

  const { isMenuOpen } = useAppSelector((state) => state.menu);

  const appRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    dispatch(setScreenWidth());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setScreenWidth());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <div ref={appRef}>
      <Header />
      <HamburgerMenu />
      <div
        className={cn('overlay', { opened: isMenuOpen })}
        onClick={() => {
          dispatch(menuActions.toggleMenu(false));
        }}
      />
      <Outlet />
    </div>
  );
}

export default App;
