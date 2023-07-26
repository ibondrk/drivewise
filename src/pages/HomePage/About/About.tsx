/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import s from './about.module.scss';
import cn from 'classnames';

import { Benefits } from './Benefits';

export const About: React.FC = () => {
  const [showMoreCorpEstablish, setShowMoreCorpEstablish] = useState(false);

  return (
    <section className={s.section} id="About">
      <div>
        <h1 className={s.about__title}>
          About <span>Us</span>
        </h1>
        <p className={s.about__descr}>
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
      <div>
        <h2 className={s.about__value_title}>
          OUR VALUES <span>&</span> BENEFITS WORKING WITH US
        </h2>
        <p className={s.about__value_descr}>
          Here are the reasons why you should choose to cooperate with our
          company:
        </p>
      </div>
      <Benefits />

      <h3 className={s.about__ceo_title}>CEO</h3>
      <p
        className={cn(s.about__ceo_descr, {
          [s.opened]: showMoreCorpEstablish,
        })}
      >
        Dear valued customers and suppliers, As the CEO of our esteemed company,
        I, Abu Saeed, extend warm greetings and express my sincere appreciation
        for the opportunity to cooperate with you. It is with great pleasure
        that I welcome you to our organization and assure you of our commitment
        to providing exceptional service and fostering mutually beneficial
        relationships.
        <br /> <br />
        At our company, we strive for excellence in all aspects of our
        operations, and we place a strong emphasis on trust and reliability. I
        want to assure you that your trust in our company will not be misplaced.
        With a solid track record of success and a dedicated team, we are
        well-positioned to meet your needs and exceed your expectations.
        <br />
        encourage you to reach out to me directly for any inquiries or
        discussions related to our partnership. Your feedback, suggestions, and
        concerns are invaluable to us as we continuously work towards enhancing
        our services and maintaining a high level of customer satisfaction.
        <br /> <br />
        We firmly believe that collaboration and cooperation are key to
        achieving success in today's dynamic business environment. Therefore, I
        am confident that our cooperation will be mutually beneficial, resulting
        in growth and prosperity for both parties involved. <br /> <br />
        Once again, express my gratitude for choosing to collaborate with our
        company. Together, we can build a strong and prosperous business
        relationship. Please feel free to contact me at your convenience, and I
        look forward to embarking on this journey of mutual success.
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
    </section>
  );
};
