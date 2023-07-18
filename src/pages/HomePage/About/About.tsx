import React from 'react';
import s from './about.module.scss';
import cn from 'classnames';

export const About: React.FC = () => {
  return (
    <section className={s.section} id="About">
      <h2 className={s.about__title}>
        About <span>Us</span>
      </h2>
      <p className={s.about__descr}>
        Welcome to our dynamic startup! We are delighted to have you on board.
        Our team, composed of automotive industry specialists with a decade of
        experience, is committed to providing you with outstanding products and
        services tailored to your ever-evolving needs. We take pride in our
        ability to stay at the forefront of the industry, continuously seeking
        innovative solutions to elevate your experience. As a wholesaler, we
        exclusively work with reliable suppliers and customers, ensuring the
        highest quality in every transaction. Join us in this exciting journey
        as we redefine the automotive industry together!
      </p>
    </section>
  );
};
