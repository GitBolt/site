import React, { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';

const Index: NextPage = function Index() {
  const [colour, setColour] = useState<string | null>(null);

  const changeColour = () => {
    const newColour = `#${Math.random().toString(16).substr(-6)}`;
    setColour(newColour);
  };

  return (
    <div className={styles.index}>
      <Head>
        <title>Syed Aabis Akhtar</title>
        <meta name="description" content="Cool favicon right?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.gradiant} />
        <h1
          className="text-white"
          style={colour ? { color: colour, textShadow: `1px 1px 20px ${colour}70` } : {}}
        >
          Nothing here yet...

        </h1>
        <h2 className="text-white">How about you click the button below till then for absolutely no reason?</h2>
        <button onClick={changeColour}>A totally random button</button>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
