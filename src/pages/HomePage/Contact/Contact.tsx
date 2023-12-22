import React, { useState, useEffect } from 'react';
import s from './contact.module.scss';
import cn from 'classnames';
// import * as functions from 'firebase-functions';

import sprite from '../../../images/sprite.svg';
// import { getTable } from '../../../api/sheetsAPI';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { phone } from 'phone';
// const spreadsheetId = functions.config().googlesheet.spreadsheetid;

// console.log(spreadsheetId);

// import { google } from 'googleapis';

// import { dw } from '../../../../.private/drive-wise-6f6c6-ef4e7a8ab21d.json';

// const sheetsClient = new google.auth.JWT({
//   keyFile: dw,
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
// });

// const sheetsClient = new google.auth.GoogleAuth({
//   keyFile: '../../../../.private/drive-wise-6f6c6-ef4e7a8ab21d.json',
//   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
// });

// const sheets = google.sheets({ version: 'v4', auth: sheetsClient });

type CountryData = {
  countryCode: string;
  dialCode: string;
  format: string;
  name: string;
};

const initialPhoneCountry: CountryData = {
  countryCode: '',
  dialCode: '',
  format: '',
  name: '',
};

export const Contact: React.FC = () => {
  const [agreement, setAgreemnet] = useState(false);
  const [agreementError, setAgreementError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [phoneCountry, setPhoneCountry] = useState(initialPhoneCountry);

  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');

  // useEffect(() => {
  //   console.log(spreadsheetId);
  // }, [spreadsheetId]);
  // input change handlers

  const NameRegExp = /^[^\d]{0,32}$/;

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value;

    if (!NameRegExp.test(inputName)) {
      return;
    }

    setName(inputName);
    setNameError('');
  };

  const handleEmailErrors = () => {
    const mailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;

    if (!email) {
      setEmailError('Please enter your mail.');
    }

    if (!mailRegExp.test(email)) {
      setEmailError('Invalid email address.');
    } else {
      setEmailError('');
    }

    return;
  };

  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  };

  const handleMessageField = () => {
    const forbiddenPatterns = /<script|SELECT|FROM|INSERT|UPDATE|DELETE/gi;

    if (forbiddenPatterns.test(message)) {
      setMessageError("Don't try to do this anymore.");
    } else {
      !messageError && setMessageError('');
    }
  };

  const handleMessageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputMessage = event.target.value;

    const sanitizedMessage = inputMessage
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    setMessage(sanitizedMessage);
  };

  const handleCompanyName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputMessage = event.target.value;

    setCompanyName(inputMessage);
  };

  const phoneValidation = () => {
    if (!phoneNumber) {
      setPhoneNumberError('Enter your phone number');
      return;
    }

    if (!phone(phoneNumber, { country: phoneCountry.countryCode }).isValid) {
      setPhoneNumberError('Phone number incorrect');
      return;
    }
  };

  const reset = () => {
    // name
    setName('');
    setNameError('');

    // company
    setCompanyName('');
    setCompanyNameError('');

    // email
    setEmail('');
    setEmailError('');

    // phone number
    setPhoneNumber('');
    setPhoneNumberError('');

    // message
    setMessage('');
    setMessageError('');

    // agreement
    setAgreemnet(false);
    setAgreementError('');
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('submit event');

    // Validation functions
    if (!agreement) {
      setAgreementError('You should confirm Privacy Policy to send your data');
    }
    phoneValidation();
    handleEmailErrors();
    if (!name) {
      setNameError('Please enter the name.');
    }

    if (
      emailError ||
      nameError ||
      companyNameError ||
      phoneNumberError ||
      messageError ||
      !agreement
    ) {
      return;
    }

    const userData = [
      [name, email, phoneNumber, phoneCountry.name, companyName, message],
    ];

    console.log(userData);

    // sheets.spreadsheets.values.append(
    //   {
    //     spreadsheetId,
    //     range: 'Clients', // Укажите имя листа
    //     valueInputOption: 'RAW',
    //     resource: {
    //       values: userData,
    //     },
    //   },
    //   (err: any, res: any) => {
    //     if (err) {
    //       console.error('Произошла ошибка:', err);
    //     } else {
    //       console.log('Данные успешно отправлены:', res.data);
    //     }
    //   }
    // );

    console.log('form was submitted');
    reset();
  };

  return (
    <section className={s.section} id="contacts">
      <div className={cn(s.headBlock, 'N--1-10')}>
        <h2 className={s.contact_title}>
          Contact <span>us</span>
        </h2>

        <div className={s.link_qr_wrapper}>
          <div className={s.linkBlock_wrapper}>
            {/* <div className={s.link_wrapper}>
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
            </div> */}
            <div className={s.link_wrapper}>
              <svg className={s.mediaLogo} width={24} height={24}>
                <use xlinkHref={`${sprite}#map`} />
              </svg>
              <a
                href="https://maps.app.goo.gl/PygHsEWPU8aqYTcSA"
                className={s.link}
              >
                Sharjah Publishing City Free Zone, Sharjah, UAE
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
        <form
          action=""
          onSubmit={(event) => handleFormSubmit(event)}
          className={cn(s.form, 'T--4-12')}
        >
          <div className={s.field_wrapper}>
            <label htmlFor="name" className={s.label}>
              Your name <span>*</span>
            </label>
            <input
              id="name"
              className={cn(s.input_field, { [s.error_enable]: nameError })}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleName}
              onBlur={() => {
                if (!name) {
                  setNameError('Please enter the name.');
                }
              }}
            />
            <span className={cn(s.underline, { [s.error_line]: nameError })} />
            {nameError && <span className={s.error}>{nameError}</span>}
          </div>

          <div className={s.field_wrapper}>
            <label htmlFor="company" className={s.label}>
              Company
            </label>
            <input
              id="company"
              className={cn(s.input_field, {
                [s.error_enable]: companyNameError,
              })}
              type="text"
              value={companyName}
              onChange={handleCompanyName}
              placeholder="Enter your company"
            />
            <span
              className={cn(s.underline, { [s.error_line]: companyNameError })}
            />
            {companyNameError && (
              <span className={s.error}>{companyNameError}</span>
            )}
          </div>

          <div className={s.field_wrapper}>
            <label htmlFor="email" className={s.label}>
              Email <span>*</span>
            </label>
            <input
              id="email"
              className={cn(s.input_field, { [s.error_enable]: emailError })}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmailInput(e)}
              onBlur={handleEmailErrors}
            />
            <span className={cn(s.underline, { [s.error_line]: emailError })} />
            {emailError && <span className={s.error}>{emailError}</span>}
          </div>

          <div className={s.field_wrapper}>
            <label htmlFor="phone" className={s.label}>
              Phone <span>*</span>
            </label>
            <PhoneInput
              inputProps={{
                required: true,
                id: 'phone',
              }}
              onChange={(value, country: CountryData) => {
                setPhoneNumber(value);
                if (country.dialCode !== phoneCountry.dialCode) {
                  setPhoneCountry(country);
                }
                setPhoneNumberError('');
              }}
              onBlur={phoneValidation}
              value={phoneNumber}
              country={'ae'}
              autoFormat={true}
              inputClass={cn(s.input_field, s.phone_input, {
                [s.error_enable]: phoneNumberError,
              })}
              buttonClass={cn(s.phone_dropdown_btn)}
              dropdownClass={s.phone_dropdown_list}
            />
            <span
              className={cn(s.underline, { [s.error_line]: phoneNumberError })}
            />
            {phoneNumberError && (
              <span className={s.error}>{phoneNumberError}</span>
            )}
          </div>

          <div className={cn(s.field_wrapper, s.message)}>
            <label htmlFor="message" className={cn(s.label)}>
              Message
            </label>
            <input
              type="text"
              className={s.input_field}
              placeholder="Enter your message"
              value={message}
              onChange={(event) => handleMessageInput(event)}
              onBlur={handleMessageField}
            />
            <span
              className={cn(s.underline, { [s.error_line]: messageError })}
            />
            {messageError && <span className={s.error}>{messageError}</span>}
          </div>

          <div className={s.checkbox_wrapper}>
            <label className={cn(s.agreement_wrapper, s.checkbox_btn)}>
              <input
                id="agreement"
                type="checkbox"
                className={s.agreement_checkbox}
                checked={agreement}
                onChange={() => {
                  setAgreemnet(!agreement);
                  setAgreementError('');
                }}
              />
              <span
                className={cn(s.checkmark, {
                  [s.agreementError]: agreementError,
                })}
              />
              <label htmlFor="agreement" className={cn(s.agreement_info)}>
                Yes, I have read the Privacy Policy and I accept that the data I
                provide is collected and stored electronically. My data is used
                only strictly earmarked for processing and answering my request.
                By submitting the contact form I agree to the processing.
              </label>
            </label>

            {agreementError && (
              <span className={cn(s.error, s.agreement_error)}>
                {agreementError}
              </span>
            )}
          </div>
          <button type="submit" className={s.submit_btn}>
            SEND
          </button>
        </form>
      </div>
    </section>
  );
};
