import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';
import Image from 'next/image';
import Line from '@/svgs/line.svg';

const Index: NextPage = function Index() {
  return (
    <div className={styles.index}>
      <PageHead />
      <div className={styles.moon} />
      <div className={styles.mainBox}>

        <h1>Hey, I'm <b>Aabis</b></h1>
        <p>I'm a fullstack developer, mostly working on Solana blockchain and Web3.</p>

      </div>

      <div className={styles.identity}>
        <div>
          <img src="/bolt.png" />
          <p>I'm mostly known as Bolt online.</p>
        </div>

        <div>
          <img src="/me.png" />
          <p>But I don't keep my identity hidden.</p>
        </div>

      </div>


      <p className={styles.intro}>My <a href="https://twitter.com/0xBolt">DMs</a> are always open, feel free to reach out or drop an <a href="mailto://heyaabis@gmail.com">Email</a>.  
        <br/>Check my work on <a href="https://github.com/GitBolt" >GitHub.</a> </p>

      <Footer />
    </div>
  );
};

export default Index;
