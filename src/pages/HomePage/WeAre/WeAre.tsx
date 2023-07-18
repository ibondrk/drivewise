import React from 'react';
import s from './weAre.module.scss';
import cn from 'classnames';

const mainPhoto = {
  tablet: require('../../../images/mainPh_tab.webp'),
  desktop: require('../../../images/mainPh_desk.webp'),
};

export const WeAre: React.FC = () => {
  return (
    <section className={cn(s.weAreSection)} id="weAre">
      <div className={cn(s.text_container, 'S--1-4', 'T--1-6')}>
        <h1 className={s.title}>
          <span>
            <span className={s.blue_word}>We</span> Are
          </span>
          <span className={s.second_row}>
            drive
            <span className={s.second_row__second}>wise solutions</span>
          </span>
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="38"
          viewBox="0 0 44 38"
          fill="none"
        >
          <path
            d="M41.3637 34.4734C42.7298 34.2725 43.6743 33.0023 43.4734 31.6363L40.1998 9.37569C39.9989 8.00967 38.7287 7.06514 37.3627 7.26602C35.9966 7.46691 35.0521 8.73714 35.253 10.1032L38.1629 29.8903L18.3757 32.8002C17.0097 33.0011 16.0651 34.2713 16.266 35.6374C16.4669 37.0034 17.7371 37.9479 19.1032 37.747L41.3637 34.4734ZM0.508243 5.00616L39.5082 34.0062L42.4918 29.9938L3.49176 0.993844L0.508243 5.00616Z"
            fill="#3549FF"
          />
        </svg>
        <p className={s.description}>
          Our goal is not just to sell products or provide services, but to
          offer value to our customers with a solution-oriented approach and
          grow together.
        </p>
      </div>
      <img
        className={cn(s.img, 'S--1-4', 'T--2-12')}
        src={mainPhoto.tablet}
        alt="main photo"
      />
      <img
        className={cn(s.img_desk, 'N--1-24', 'D--1-25')}
        src={mainPhoto.desktop}
        alt="main photo"
      />
    </section>
  );
};
