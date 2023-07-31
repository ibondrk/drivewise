import React, { useEffect } from 'react';
import './styles/App.scss';
import cn from 'classnames';

import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { HamburgerMenu } from './components/HamburgerMenu';
// import { ProgressBar } from './components/ProgressBar';

import { useAppSelector, useAppDispatch } from './redux/hooks';
import * as menuActions from './redux/featcher/menu';
import { setScreenWidth } from './redux/featcher/screenWidth';
// import { setSectionId } from './redux/featcher/section';

function App() {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state) => state.menu);
  const { id } = useAppSelector((state) => state.section);
  const { isNoteBook } = useAppSelector((state) => state.screenWidth);

  // const appRef = useRef<HTMLDivElement | null>(null);

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

  const backColor = id === 0 || (id === 4 && !isNoteBook) ? '#000' : '#fff';

  return (
    <div
      className={cn('App')}
      style={{ backgroundColor: backColor }}
      // ref={appRef}
    >
      <Header />
      <HamburgerMenu />
      <div
        className={cn('overlay', { opened: isMenuOpen })}
        onClick={() => {
          dispatch(menuActions.toggleMenu(false));
        }}
      />
      <Outlet />
      {/* <ProgressBar /> */}
    </div>
  );
}

export default App;
