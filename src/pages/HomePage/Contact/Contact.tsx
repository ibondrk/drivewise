import React from 'react';
import s from './contact.module.scss';
import cn from 'classnames';

import sprite from '../../../images/sprite.svg';

export const Contact: React.FC = () => {
  return (
    <section className={s.section} id="contacts">
      <div className={cn(s.headBlock, 'N--1-10')}>
        <h2 className={s.contact_title}>
          Contact <span>us</span>
        </h2>

        <div className={s.link_qr_wrapper}>
          <div className={s.linkBlock_wrapper}>
            <div className={s.link_wrapper}>
              <svg className={s.mediaLogo} width={24} height={24}>
                <use xlinkHref={`${sprite}#mail`} />
              </svg>
              <a
                className={s.link}
                href="mailto:mariaK@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                MariaK@gmail.com
              </a>
            </div>
            <div className={s.link_wrapper}>
              <svg className={s.mediaLogo} width={24} height={24}>
                <use xlinkHref={`${sprite}#linkedIn`} />
              </svg>
              <a href="" className={s.link} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className={s.link_wrapper}>
              <svg className={s.mediaLogo} width={24} height={24}>
                <use xlinkHref={`${sprite}#map`} />
              </svg>
              <a
                href="https://goo.gl/maps/8eY6N13fiwdeEGgB8"
                className={s.link}
              >
                Dubai Digital Park A2, Dubai, UAE
              </a>
            </div>
          </div>

          <svg className={s.qr}>
            <use xlinkHref={`${sprite}#qr`} />
          </svg>
        </div>
      </div>
      <div className={cn(s.formBlock, 'N--12-24')}>
        <p className={cn(s.form_descr, 'T--1-3')}>
          Stay up to date on all the latest from <span>DRIVE</span>WISE: news,
          product information, supply chains and etc.
        </p>
        <form action="" className={cn(s.form, 'T--4-12')}>
          <div className={s.field_wrapper}>
            <label htmlFor="name" className={s.label}>
              Your name
            </label>
            <input
              id="name"
              className={s.input_field}
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className={s.field_wrapper}>
            <label htmlFor="company" className={s.label}>
              Company
            </label>
            <input
              id="company"
              className={s.input_field}
              type="text"
              placeholder="Enter your company"
            />
          </div>

          <div className={s.field_wrapper}>
            <label htmlFor="email" className={s.label}>
              Email
            </label>
            <input
              id="email"
              className={s.input_field}
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={s.field_wrapper}>
            <label htmlFor="phone" className={s.label}>
              Phone
            </label>
            <input
              id="phone"
              className={s.input_field}
              type="phone"
              placeholder="+ 00 000 00 00"
            />
          </div>

          <div className={cn(s.field_wrapper, s.message)}>
            <label htmlFor="message" className={cn(s.label)}>
              Message
            </label>
            <input
              type="text"
              className={s.input_field}
              placeholder="Enter your message"
            />
          </div>

          <div className={s.agreement_wrapper}>
            <input
              id="agreement"
              type="checkbox"
              className={s.agreement_checkbox}
            />
            <label htmlFor="agreement" className={cn(s.agreement_info)}>
              Yes, I have read the Privacy Policy and I accept that the data I
              provide is collected and stored electronically. My data is used
              only strictly earmarked for processing and answering my request.
              By submitting the contact form I agree to the processing.
            </label>
          </div>
          <button type="submit" className={s.submit_btn}>
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};
