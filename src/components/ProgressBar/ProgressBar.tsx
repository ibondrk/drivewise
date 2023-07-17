import React from 'react';
import s from './progressBar.module.scss';

import { motion, useScroll } from 'framer-motion';
import { useAppSelector } from '../../redux/hooks';

export const ProgressBar = () => {
  const { scrollXProgress } = useScroll();
  const { id } = useAppSelector((state) => state.section);
  const arrowColor = id === 0 ? '#fff' : '#000';

  return (
    <div className={s.progress_container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="16"
        viewBox="0 0 31 16"
        fill={arrowColor}
        fillOpacity="0.5"
        className={s.arrow_left}
        // onClick={}
      >
        <path d="M0.292891 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292891 7.29289ZM31 7L0.999998 7V9L31 9V7Z" />
      </svg>
      <motion.div
        className={s.progress_bar}
        style={{ scaleX: scrollXProgress }}
      ></motion.div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="16"
        viewBox="0 0 31 16"
        fill={arrowColor}
        className={s.arrow_right}
      >
        <path d="M30.7071 8.7071C31.0976 8.31658 31.0976 7.68341 30.7071 7.29289L24.3431 0.92893C23.9526 0.538406 23.3195 0.538406 22.9289 0.92893C22.5384 1.31945 22.5384 1.95262 22.9289 2.34314L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.7071ZM8.74216e-08 9L30 9L30 7L-8.74216e-08 7L8.74216e-08 9Z" />
      </svg>
    </div>
  );
};
