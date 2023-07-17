import React from 'react';
import s from './pageHome.module.scss';

import { WeAre } from './WeAre';

export const PageHome: React.FC = () => {
  // const scrollRef = useRef(null);

  return (
    <div className={s.page}>
      <WeAre />
    </div>
  );
};
