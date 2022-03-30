import React from 'react';
import Head from 'next/head';

type Props = {
  title?: string
};

export const PageHead = function PageHead({ title }: Props) {
  return (
    <Head>
      <title>{title || 'Syed Aabis Akhtar' }</title>
      <meta name="title" content={title || 'Syed Aabis Akhtar'} />
      <meta name="description" content="I build stuff" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
