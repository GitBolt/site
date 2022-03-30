import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import { Animation } from '@/components/Animation';
import Person from '@/public/Person.json';
import { PageHead } from '@/components/Head';

const Index: NextPage = function Index() {
  return (
    <div className={styles.index}>
      <PageHead />
      <div className={styles.gradiant} />
      <main className={styles.main}>
        <h1 className="text-white text-8xl font-bold">Heya! I’m Aabis, also known as 0xBolt online.</h1>
        <p className="text-blue-1 text-4xl w-4/6 mt-5">I’ve spent most of my time being a fullstack web developer and doing scripting, bot dev and some ML. Now I work on Web3 projects related to Solana blockchain.</p>
        <div className={styles.buttons}>
          <Link href="/projects">
            <a className={styles.projects}>Projects</a>
          </Link>
          <Link href="/blog">
            <a className={styles.blog}>Blog</a>
          </Link>
        </div>
        <div className={styles.animation}>
          <Animation json={Person} height="40rem" width="55rem" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
