/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';

const Index: NextPage = function Index() {
  return (
    <div className={styles.index}>
      <PageHead />
      <div className={styles.moon} />
      <div className={styles.mainBox}>

        <h1>
          Hey, I&apos;m
          {' '}
          <b>Aabis</b>
        </h1>
        <p>I&apos;m a fullstack developer, mostly working on Solana blockchain.</p>

      </div>

      <div className={styles.identity}>
        <div>
          <img src="/bolt.png" />
          <p>I&apos;m mostly known as Bolt online.</p>
        </div>

        <div>
          <img src="/me.png" />
          <p>But I don&apos;t keep my identity hidden.</p>
        </div>

      </div>

      <p className={styles.intro}>
        My
        {' '}
        <a href="https://twitter.com/0xBolt" target="_blank" rel="noreferrer">DMs on Twitter</a>
        {' '}
        are always open, feel free to reach out or drop an
        {' '}
        <a href="mailto:heyaabis@gmail.com" target="_blank" rel="noreferrer">Email.</a>
        <br />
        Some things I've done:
        {' '}
        <a href="https://github.com/GitBolt" target="_blank" rel="noreferrer">GitHub</a>
      </p>

      <Footer />
    </div>
  );
};

export default Index;
