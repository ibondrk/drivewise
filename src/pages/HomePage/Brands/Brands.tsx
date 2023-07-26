import React from 'react';
import s from './brands.module.scss';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';

import sprite from '../../../images/sprite.svg';

export const Brands: React.FC = () => {
  const swiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    observer: true,
    loop: false,
    direction: 'horizontal' as const,
    pagination: {
      clickable: true,
      el: '.swiper_pagination',
      type: 'custom' as const,
    },
    navigation: {
      prevEl: `.${s.swiperPrev}`,
      nextEl: `.${s.swiperNext}`,
    },
  };
  return (
    <section className={s.section}>
      <h2 className={s.brand_title}>Brands</h2>
      <div className={s.swiper_wrapper}>
        <Swiper {...swiperOptions}>
          <SwiperSlide className={s.brand_slide}>
            <svg
              className={cn(s.brand_logo, s.renault)}
              width={146}
              height={191}
            >
              <use xlinkHref={`${sprite}#renault`} />
            </svg>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
