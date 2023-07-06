import React from 'react';
import './styles/App.scss';
import cn from 'classnames';

import { Outlet } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from './redux/hooks';
import * as menuActions from './redux/featcher/menu';

function App() {
  const dispatch = useAppDispatch();

  const { isMenuOpen } = useAppSelector((state) => state.menu);

  // const appRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={'App'}>
      <div
        className={cn('overlay', { opened: isMenuOpen })}
        onClick={() => {
          dispatch(menuActions.toggleMenu(false));
        }}
      />
      {/* <Header />
      <HamburgerMenu /> */}
      <Outlet />
      {/* {!is404Page && <Contacts />} */}
    </div>
  );
}

export default App;
