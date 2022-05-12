import Link from 'next/link';
import React from 'react';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';
import { Animation } from '@/components/Animation';
import Person from '@/public/Person.json';

const Index: NextPage = function Index() {
  return (
    <div className={styles.index}>
      <PageHead />
      <div className={styles.gradient} />
      <main className={styles.main}>
        <h1 className="text-white text-[4.5rem] font-[600]">
          Heya!
          <br />
          I&apos;m Aabis, also known as 0xBolt online.
        </h1>
        <p className="text-blue-1 text-[2.4rem] w-4/6 mt-5">I&apos;ve spent most of my time being a fullstack web developer and doing scripting, bot dev and some ML. Now I work on Web3 projects on Solana blockchain.</p>
        <div className={styles.buttons}>
          <Link href="/projects">
            <a className={styles.projects}>Stuff that I built</a>
          </Link>
          <Link href="/projects">
            <a className={styles.skills}>Stuff that I know</a>
          </Link>
        </div>
        <div className={styles.animation}>
          <Animation json={Person} height="40rem" width="55rem" />
        </div>
        <Footer />
      </main>

    </div>
  );
};

export default Index;
