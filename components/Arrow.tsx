import React from 'react';
import styles from '@/styles/Index.module.scss';

export const Arrow = function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3.25 8.75l5.5-5.5M4.25 3.25h4.5v4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
