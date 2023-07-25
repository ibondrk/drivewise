import React, { useEffect, useRef } from 'react';
import s from './pageHome.module.scss';

import { WeAre } from './WeAre';
import { About } from './About';

import { ProgressBar } from '../../components/ProgressBar';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setSectionId } from '../../redux/featcher/section';

export const PageHome: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.section);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = container.scrollLeft;
      const sectionWidth = container.offsetWidth;

      const currentSectionIndex = Math.floor(scrollPosition / sectionWidth);
      dispatch(setSectionId({ id: currentSectionIndex }));
    };

    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  useEffect(() => {
    console.log('section id:', id);
  }, [id]);

  return (
    <>
      <div className={s.page}>
        <div className={s.horizontalScrollContainer} ref={containerRef}>
          <WeAre />
          <About />
        </div>
        <ProgressBar containerRef={containerRef} />
      </div>
    </>
  );
};
