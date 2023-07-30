import React from 'react';
import s from './navigation.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import * as menuActions from '../../redux/featcher/menu';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const { id } = useAppSelector((state) => state.section);

  const handleFooterLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('scrollToSection', sectionId);
      window.location.href = '/';
    } else {
      event.preventDefault();
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className={s.nav_bar}>
      <ul className={s.nav_list}>
        <li className={cn(s.nav_item, { [s.currentSection]: id === 1 })}>
          <a
            href="/"
            className={s.nav_link}
            style={{
              backgroundColor: id === 0 ? '#fff' : '#000',
              color: id === 0 ? '#000' : '#fff',
            }}
            onClick={(event) => {
              dispatch(menuActions.toggleMenu(false));
              handleFooterLinkClick(event, 'about');
            }}
          >
            ABOUT US
          </a>
        </li>
        <li className={cn(s.nav_item, { [s.currentSection]: id === 2 })}>
          <a
            href="/"
            style={{
              backgroundColor: id === 0 ? '#fff' : '#000',
              color: id === 0 ? '#000' : '#fff',
            }}
            className={s.nav_link}
            onClick={(event) => {
              dispatch(menuActions.toggleMenu(false));
              handleFooterLinkClick(event, 'brands');
            }}
          >
            BRANDS
          </a>
        </li>
        <li className={cn(s.nav_item, { [s.currentSection]: id === 3 })}>
          <a
            href="/"
            style={{
              backgroundColor: id === 0 ? '#fff' : '#000',
              color: id === 0 ? '#000' : '#fff',
            }}
            className={s.nav_link}
            onClick={(event) => {
              dispatch(menuActions.toggleMenu(false));
              handleFooterLinkClick(event, 'map');
            }}
          >
            MAP
          </a>
        </li>
        <li className={s.nav_item}>
          <NavLink
            to="/"
            // to="/conditions"
            className={s.nav_link}
            style={{
              backgroundColor: id === 0 ? '#fff' : '#000',
              color: id === 0 ? '#000' : '#fff',
            }}
          >
            TERMS & PRIVACY POLICY
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink
            to="/"
            className={s.nav_link}
            style={{
              backgroundColor: id === 0 ? '#fff' : '#000',
              color: id === 0 ? '#000' : '#fff',
            }}
          >
            COOKIE POLICY
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <a
            href="/"
            className={s.nav_link}
            style={{
              backgroundColor: id === 0 ? '#fff' : '#000',
              color: id === 0 ? '#000' : '#fff',
            }}
            onClick={(event) => {
              dispatch(menuActions.toggleMenu(false));
              handleFooterLinkClick(event, 'contacts');
            }}
          >
            CONTACTS
          </a>
        </li>
      </ul>
    </nav>
  );
};
