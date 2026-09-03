import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

const Site = function Site({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
};

export default Site;
