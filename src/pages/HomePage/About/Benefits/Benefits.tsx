import React from 'react';
import s from './benefits.module.scss';
import cn from 'classnames';

export const Benefits: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.item}>
        <p className={s.numb}>01</p>
        <p className={s.benefit}>
          Logistics Power: We have a strong logistics infrastructure to ensure
          efficient delivery.
        </p>
      </div>

      <div className={s.item}>
        <p className={s.numb}>02</p>
        <p className={s.benefit}>
          High Quality: Our commitment to delivering top-notch products and
          services is unwavering.
        </p>
      </div>

      <div className={s.item}>
        <p className={s.numb}>03</p>
        <p className={s.benefit}>
          Continuous Improvement: We constantly strive to improve and meet your
          evolving needs.
        </p>
      </div>

      <div className={s.item}>
        <p className={s.numb}>04</p>
        <p className={s.benefit}>
          Solution-Oriented Approach: We provide customized solutions tailored
          to your requirements.
        </p>
      </div>

      <div className={s.item}>
        <p className={s.numb}>05</p>
        <p className={s.benefit}>
          Innovative Approach: We embrace innovation to bring you cutting-edge
          solutions.
        </p>
      </div>

      <div className={s.item}>
        <p className={s.numb}>06</p>
        <p className={s.benefit}>
          B2B Focus: We specialize in serving business-to-business (B2B) clients
        </p>
      </div>

      <div className={s.item}>
        <p className={s.numb}>07</p>
        <p className={s.benefit}>
          Product Variety: We offer a wide range of products to meet diverse
          needs.
        </p>
      </div>

      <div className={s.item}>
        <p className={s.numb}>08</p>
        <p className={cn(s.benefit, s.last)}>
          10 Years of Experience: With a decade of industry expertise, we bring
          valuable experience to the table.
        </p>
      </div>
    </div>
  );
};
