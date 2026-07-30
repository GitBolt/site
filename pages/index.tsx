import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import styles from '@/styles/Private.module.scss';

const Private: NextPage = function Private() {
  return (
    <>
      <Head>
        <title>Private</title>
        <meta name="description" content="This website is temporarily private." />
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.page}>
        <div className={styles.status} aria-hidden="true" />
        <h1>This website is private.</h1>
        <p>Please check back later.</p>
      </main>
    </>
  );
};

export default Private;
