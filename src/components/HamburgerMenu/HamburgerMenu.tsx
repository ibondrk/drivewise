import React, { useEffect } from 'react';
import s from './hamburgerMenu.module.scss';
import cn from 'classnames';
import { Navigation } from '../Navigation';

import { useAppSelector } from '../../redux/hooks';
// import * as menuActions from '../../redux/featcher/menu';

export const HamburgerMenu: React.FC = () => {
  // const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state) => state.menu);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
  }, [isMenuOpen]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;
  //     if (screenWidth > 1440) {
  //       dispatch(menuActions.toggleMenu(false));
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div className={cn(s.hamburger_menu, { [s.opened]: isMenuOpen })}>
      <div className={s.menu_header}></div>
      <Navigation />
    </div>
  );
};
