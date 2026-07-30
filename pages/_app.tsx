import React from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

const Site = function Site({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default Site;
