import React, { useRef, useEffect } from 'react';
import './styles/App.scss';
import cn from 'classnames';

import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { HamburgerMenu } from './components/HamburgerMenu';
import { ProgressBar } from './components/ProgressBar';

import { useAppSelector, useAppDispatch } from './redux/hooks';
import * as menuActions from './redux/featcher/menu';
import { setScreenWidth } from './redux/featcher/screenWidth';
import { setSectionId } from './redux/featcher/section';

function App() {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state) => state.menu);
  // added comment just to check build

  const appRef = useRef<HTMLDivElement | null>(null);
  // const location = useLocation();
  // const prevLocation = useRef(location);

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

  useEffect(() => {
    const handleScroll = () => {
      // Отримання поточної позиції прокрутки по горизонталі
      const scrollPosition = window.scrollX;

      // Розрахунок ширини кожної секції
      const sectionWidth = window.innerWidth;

      // Визначення поточної секції
      const currentSectionIndex = Math.floor(scrollPosition / sectionWidth);

      dispatch(setSectionId(currentSectionIndex));
    };

    // Додавання обробника події scroll
    window.addEventListener('scroll', handleScroll);

    // Прибирання обробника події scroll при видаленні компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <div className={cn('App')} ref={appRef}>
      <Header />
      <HamburgerMenu />
      <div
        className={cn('overlay', { opened: isMenuOpen })}
        onClick={() => {
          dispatch(menuActions.toggleMenu(false));
        }}
      />
      <Outlet />
      <ProgressBar />
    </div>
  );
}

export default App;
