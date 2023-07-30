/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import s from './about.module.scss';
import cn from 'classnames';

import { Benefits } from './Benefits';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import logo from '../../../images/about_logo.svg';

export const About: React.FC = () => {
  const [showMoreCorpEstablish, setShowMoreCorpEstablish] = useState(false);

  const { isNoteBook } = useAppSelector((state) => state.screenWidth);

  return (
    <section className={s.section} id="about">
      <div className={s.head_block_wrapper}>
        <div className={s.title_wrapper}>
          <h1 className={cn(s.about__title, 'T--1-6')}>
            About <span>Us</span>
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={isNoteBook ? 148 : 124}
            height={isNoteBook ? 90 : 78}
            viewBox={isNoteBook ? '0 0 134 92' : '0 0 114 78'}
            fill="none"
            className={s.about_title_decor_img}
          >
            <line
              x1="-10"
              y1="1.25"
              x2="38.5946"
              y2="1.25"
              stroke="black"
              strokeWidth="1.5"
            />
            <line
              x1="-10"
              y1="13.8174"
              x2="67.9189"
              y2="13.8174"
              stroke="black"
              strokeWidth="1.5"
            />
            <line
              x1="-10"
              y1="26.3853"
              x2="92.2162"
              y2="26.3853"
              stroke="black"
              strokeWidth="1.5"
            />
            <line
              x1="-10"
              y1="38.9526"
              x2="114"
              y2="38.9526"
              stroke="black"
              strokeWidth="1.5"
            />
            <line
              x1="-10"
              y1="51.5205"
              x2="56.1892"
              y2="51.5205"
              stroke="black"
              strokeWidth="1.5"
            />
            <line
              x1="-10"
              y1="64.0879"
              x2="96.4054"
              y2="64.0879"
              stroke="black"
              strokeWidth="1.5"
            />
            <line
              x1="-10"
              y1="76.6553"
              x2="78.8108"
              y2="76.6553"
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <p className={cn(s.about__descr, 'T--8-12')}>
          Welcome to our dynamic startup! We are delighted to have you on board.
          Our team, composed of automotive industry specialists with a decade of
          experience, is committed to providing you with outstanding products
          and services tailored to your ever-evolving needs. We take pride in
          our ability to stay at the forefront of the industry, continuously
          seeking innovative solutions to elevate your experience. As a
          wholesaler, we exclusively work with reliable suppliers and customers,
          ensuring the highest quality in every transaction. Join us in this
          exciting journey as we redefine the automotive industry together!
        </p>
      </div>
      <div className={s.second_block_wrapper}>
        <div className={cn(s.second_title_wrapper, 'T--1-6')}>
          <h2 className={cn(s.value_title)}>
            OUR VALUES <span>&</span> BENEFITS WORKING WITH US
          </h2>
          <p className={cn(s.value_descr)}>
            Here are the reasons why you should choose to cooperate with our
            company:
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="151"
          viewBox="0 0 74 151"
          fill="none"
          className={cn(s.second_decor_img, 'T--12-12')}
        >
          <path
            d="M73.0795 98.3611C60.8994 98.3611 51.0254 88.728 51.0254 76.8449C51.0254 64.9618 60.8994 55.3286 73.0795 55.3286C76.7678 55.3286 80.2446 56.2119 83.2998 57.7735"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M72.7301 105.892C56.2869 105.892 42.957 92.887 42.957 76.8448C42.957 60.8026 56.2869 47.7979 72.7301 47.7979C77.7093 47.7979 82.4029 48.9903 86.5274 51.0984"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M74.4147 115.574C52.2873 115.574 34.3496 98.1139 34.3496 76.5758C34.3496 55.0377 52.2873 37.5776 74.4147 37.5776C81.115 37.5776 87.4311 39.1786 92.9814 42.0089"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M77.3743 126.87C49.1569 126.87 26.2822 104.593 26.2822 77.1137C26.2822 49.6341 49.1569 27.3574 77.3743 27.3574C85.9188 27.3574 93.9733 29.4 101.051 33.0111"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M77.7591 134.401C44.8726 134.401 18.2129 108.391 18.2129 76.3068C18.2129 44.2224 44.8726 18.2129 77.7591 18.2129C87.7173 18.2129 97.1046 20.5978 105.354 24.814"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M78.1448 143.007C40.5893 143.007 10.1445 113.265 10.1445 76.5759C10.1445 39.8869 40.5893 10.1445 78.1448 10.1445C89.5169 10.1445 100.237 12.8717 109.657 17.693"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M77.4544 150C35.2298 150 1 116.645 1 75.5C1 34.3548 35.2298 1 77.4544 1C90.2403 1 102.293 4.05836 112.884 9.4653"
            stroke="black"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <Benefits />
      {/* <span className={s.before_line} />
      <span className={s.after_line} /> */}

      <h3 className={s.about__ceo_title}>CEO</h3>
      <div className={s.ceo_descr_wrapper}>
        <p
          className={cn(s.about__ceo_descr, {
            [s.opened]: showMoreCorpEstablish,
          })}
        >
          Dear valued customers and suppliers, As the CEO of our esteemed
          company, I, Abu Saeed, extend warm greetings and express my sincere
          appreciation for the opportunity to cooperate with you. It is with
          great pleasure that I welcome you to our organization and assure you
          of our commitment to providing exceptional service and fostering
          mutually beneficial relationships.
          <br /> <br />
          At our company, we strive for excellence in all aspects of our
          operations, and we place a strong emphasis on trust and reliability. I
          want to assure you that your trust in our company will not be
          misplaced. With a solid track record of success and a dedicated team,
          we are well-positioned to meet your needs and exceed your
          expectations.
          <br />
          encourage you to reach out to me directly for any inquiries or
          discussions related to our partnership. Your feedback, suggestions,
          and concerns are invaluable to us as we continuously work towards
          enhancing our services and maintaining a high level of customer
          satisfaction.
          <br /> <br />
          We firmly believe that collaboration and cooperation are key to
          achieving success in today's dynamic business environment. Therefore,
          I am confident that our cooperation will be mutually beneficial,
          resulting in growth and prosperity for both parties involved. <br />{' '}
          <br />
          Once again, express my gratitude for choosing to collaborate with our
          company. Together, we can build a strong and prosperous business
          relationship. Please feel free to contact me at your convenience, and
          I look forward to embarking on this journey of mutual success.
          <br /> <br />
          Faithfully,
          <br />
          <span>Abu Saeed</span>
        </p>
        <div
          className={s.description_btn}
          onClick={() => setShowMoreCorpEstablish(!showMoreCorpEstablish)}
        >
          {!showMoreCorpEstablish ? 'Read more' : 'Hide'}
        </div>
        <img
          className={s.ceo_logo}
          src={logo}
          width={266}
          height={277}
          alt="logo"
        />
      </div>
    </section>
  );
};
