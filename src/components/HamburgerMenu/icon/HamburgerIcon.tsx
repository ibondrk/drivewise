import React from 'react';
import s from './hamburgerIcon.module.scss';
import cn from 'classnames';

import * as menuActions from '../../../redux/featcher/menu';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

export const HamburgerIcon: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state) => state.menu);

  return (
    <div
      className={cn(s.menu_trigger, s.action, { [s.active]: isMenuOpen })}
      onClick={() => dispatch(menuActions.toggleMenu(!isMenuOpen))}
    >
      <span />
      <span />
      <span />
    </div>
  );
};
