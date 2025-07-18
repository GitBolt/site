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
      {/* <div className={styles.moon} /> */}
      <div className={styles.mainBox}>

        <h1>
          Hi, I&apos;m
          {' '}
          <b>Aabis</b>
        </h1>
        <p>
          I love aerospace, finance, and building things.
          I was featured in the documentary
          {' '}
          <a href="https://www.youtube.com/watch?v=dxqHtNglAJo" target="_blank" rel="noreferrer">Superteens</a>
          , won Apple&apos;s
          {' '}
          <a href="https://twitter.com/0xBolt/status/1656023458680119327" target="_blank" rel="noreferrer">Swift Student Challenge</a>
          {' '}
          in 4 days without having a Mac, and
          won
          {' '}
          <a href="https://www.sandstormhackathon.com" target="_blank" rel="noreferrer">Sandstorm</a>
          {' '}
          hackathon by building a project in 3 hours before deadline
        </p>

      </div>

      <div className={styles.identity}>
        <div>
          <img src="/bolt.png" />
          <p>I&apos;m mostly known as Bolt online.</p>
        </div>

        <div>
          <img src="/me.png" />
          <p>But I&apos;m not an anon</p>
        </div>

      </div>

      <p className={styles.intro}>
        My DMs on
        {' '}
        <a href="https://twitter.com/0xBolt" target="_blank" rel="noreferrer">X (Twitter)</a>
        {' '}
        are always open, feel free to reach out or drop an
        {' '}
        <a href="mailto:heyaabis@gmail.com" target="_blank" rel="noreferrer">email.</a>
        <br />
        Most of my projects are open sourced on
        {' '}
        <a href="https://github.com/GitBolt" target="_blank" rel="noreferrer">GitHub.</a>
      </p>

      <Footer />
    </div>
  );
};

export default Index;
