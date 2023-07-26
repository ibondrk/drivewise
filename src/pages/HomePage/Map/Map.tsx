import React from 'react';
import s from './map.module.scss';
import cn from 'classnames';

import map from '../../../images/map.svg';

export const Map: React.FC = () => {
  return (
    <section className={s.section}>
      <h2 className={cn(s.map_title, 'S--1-1')}>Map</h2>
      <img className={cn(s.map, 'S--1-4')} src={map} alt="map" />
    </section>
  );
};
