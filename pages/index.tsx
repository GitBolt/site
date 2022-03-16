import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';

const Index: NextPage = function Index() {
  return (
    <div className={styles.index}>
      <Head>
        <title>Syed Aabis Akhtar</title>
        <meta name="description" content="Cool favicon right?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.gradiant} />
        <h1 className="text-white">Nothing here yet...</h1>
        <h2 className="text-white">How about you click the button below till then for absolutely no reason?</h2>
        <button>A totally random button</button>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
