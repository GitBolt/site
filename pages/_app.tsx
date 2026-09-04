import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { inter } from '@/styles/fonts';

const Site = function Site({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
};

export default Site;
