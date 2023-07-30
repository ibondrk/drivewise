import React, { useEffect, useState } from 'react';
import s from './brands.module.scss';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/scss';

import sprite from '../../../images/sprite.svg';

const brandsData = [
  'Renault',
  'Chevrolet',
  'Hyundai',
  'Audi',
  'Volkswagen',
  'Honda',
  'Nissan',
  'Land Rover',
  'Volvo',
  'Mitsubishi',
  'Toyota',
  'BMW',
  'Mercedes-Benz',
  'Man',
  // 'Filtron',
  // 'Osram',
  // 'Febi',
  // 'SKF',
];

export const Brands: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = brandsData.length;

  const handleScrollAndResize = () => {
    const items = document.querySelectorAll('[data-brand]');
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.left >= 0 && rect.right <= window.innerWidth) {
        item.classList.remove(`${s.dimmed}`);
      } else {
        item.classList.add(`${s.dimmed}`);
      }
    });
  };

  useEffect(() => {
    const swiperContainer = document.querySelector('[data-pagination]');
    if (swiperContainer) {
      swiperContainer.addEventListener('scroll', handleScrollAndResize);
    }

    window.addEventListener('resize', handleScrollAndResize);

    return () => {
      if (swiperContainer) {
        swiperContainer.removeEventListener('scroll', handleScrollAndResize);
      }
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  // useEffect(
  //   () => console.log('Active index: ', currentSlide, 'total: ', totalSlides),
  //   [currentSlide]
  // );

  const swiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    observer: true,
    loop: false,
    direction: 'horizontal' as const,
    onSlideChange: (swiper: any) => {
      setCurrentSlide(swiper.realIndex + 1);
      handleScrollAndResize();
    },
    pagination: {
      clickable: true,
      el: '[data-pagination]',
      type: 'custom' as const,
      renderCustom: function (swiper: any, current: number, total: number) {
        let paginationHtml = '';
        for (let i = 0; i < total; i++) {
          const brand = brandsData[i];
          paginationHtml += `<li class="${cn(
            'swiper-pagination-bullet',
            s.pagination_item,
            {
              [s.active]: i === current - 1,
            }
          )}" data-brand="${brand}">${brand}</li>`;
        }
        return paginationHtml;
      },
    },
    navigation: {
      prevEl: '[data-swiper-prev]',
      nextEl: '[data-swiper-next]',
    },
  };
  return (
    <section className={s.section} id="brands">
      <h2 className={cn(s.brand_title, 'S--1-4')}>Brands</h2>
      <ul
        className={cn(s.swiper_pagination, 'S--1-4', 'N--1-12')}
        data-pagination
      ></ul>

      <div className={cn(s.swiper_nav, 'S--2-3', 'N--18-19')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="16"
          viewBox="0 0 31 16"
          className={s.swiper_arrow}
          opacity={currentSlide === 1 ? 0.5 : 1}
          data-swiper-prev
        >
          <path d="M0.292891 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292891 7.29289ZM31 7L0.999998 7V9L31 9V7Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="16"
          viewBox="0 0 31 16"
          className={s.swiper_arrow}
          opacity={currentSlide === totalSlides ? 0.5 : 1}
          data-swiper-next
        >
          <path d="M30.7071 8.7071C31.0976 8.31658 31.0976 7.68341 30.7071 7.29289L24.3431 0.92893C23.9526 0.538406 23.3195 0.538406 22.9289 0.92893C22.5384 1.31945 22.5384 1.95262 22.9289 2.34314L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.7071ZM8.74216e-08 9L30 9L30 7L-8.74216e-08 7L8.74216e-08 9Z" />
        </svg>
      </div>
      <div className={cn(s.swiper_wrapper, 'S--1-4', 'N--13-24')}>
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
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={280} height={250}>
              <use xlinkHref={`${sprite}#chevrolet`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={252} height={152}>
              <use xlinkHref={`${sprite}#hyundai`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={235} height={145}>
              <use xlinkHref={`${sprite}#audi`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={181} height={181}>
              <use xlinkHref={`${sprite}#vw`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={233} height={185}>
              <use xlinkHref={`${sprite}#honda`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={280} height={250}>
              <use xlinkHref={`${sprite}#nissan`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={280} height={250}>
              <use xlinkHref={`${sprite}#landRover`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={205} height={206}>
              <use xlinkHref={`${sprite}#volvo`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={184} height={204}>
              <use xlinkHref={`${sprite}#mitsubishi`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={280} height={250}>
              <use xlinkHref={`${sprite}#toyota`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={200} height={200}>
              <use xlinkHref={`${sprite}#bmw`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={280} height={250}>
              <use xlinkHref={`${sprite}#mercedes`} />
            </svg>
          </SwiperSlide>
          <SwiperSlide className={s.brand_slide}>
            <svg className={s.brand_logo} width={241} height={133}>
              <use xlinkHref={`${sprite}#man`} />
            </svg>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
