import React, { useEffect, useRef, useState } from 'react';
import s from './pageHome.module.scss';

import { WeAre } from './WeAre';
import { About } from './About';
import { Map } from './Map';
import { Brands } from './Brands';
import { Contact } from './Contact';

import { ProgressBar } from '../../components/ProgressBar';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setSectionId } from '../../redux/featcher/section';

export const PageHome: React.FC = () => {
  const dispatch = useAppDispatch();
  // const { id } = useAppSelector((state) => state.section);
  const containerRef = useRef<HTMLDivElement>(null);
  // const [activeLink, setActiveLink] = useState('weAre');

  // const [prevPageYOffset, setPrevPageYOffset] = useState(0);

  const sectionIds = ['weAre', 'about', 'brands', 'map', 'contacts'];

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

  // useEffect(() => {
  //   console.log('section id:', id, 'active section: ');
  // }, [id]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  return (
    <>
      <div className={s.page}>
        <div className={s.horizontalScrollContainer} ref={containerRef}>
          <WeAre />
          <About />
          <Brands />
          <Map />
          <Contact />
        </div>
        <ProgressBar
          containerRef={containerRef}
          scrollToSection={scrollToSection}
          sectionIds={sectionIds}
        />
      </div>
    </>
  );
};
