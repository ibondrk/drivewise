import React from 'react';
import s from './hamburgerIcon.module.scss';
import cn from 'classnames';

import * as menuActions from '../../../redux/featcher/menu';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

export const HamburgerIcon: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isMenuOpen } = useAppSelector((state) => state.menu);
  const { id } = useAppSelector((state) => state.section);

  const iconColor = id === 0 ? '#fff' : '#000';

  const insideIconColor =
    (isMenuOpen && (iconColor === '#fff' ? '#000' : '#fff')) || iconColor;

  return (
    <div
      className={cn(s.menu_trigger, s.action, { [s.active]: isMenuOpen })}
      onClick={() => dispatch(menuActions.toggleMenu(!isMenuOpen))}
    >
      <span style={{ backgroundColor: insideIconColor }} />
      <span style={{ backgroundColor: insideIconColor }} />
      <span style={{ backgroundColor: insideIconColor }} />
    </div>
  );
};
