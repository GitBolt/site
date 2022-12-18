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
      <div className={styles.gradient} />
      <main className={styles.main}>
        <h1 className="text-white text-[4.5rem] font-[600]">
          Hey,
          <br />
          I&apos;m Aabis, also known as 0xBolt online.
          <br />
          I&apos;m and love to build things!
        </h1>
        <p className="text-blue-1 text-[2.4rem] w-4/6 mt-5">I&apos;ve spent most of my time being a fullstack web developer and doing scripting, bot dev and some ML. Now I work on Web3 projects on Solana blockchain.</p>
        <div className={styles.buttons}>
          <Link href="https://github.com/GitBolt?tab=repositories">
            <a target="_blank" rel="noopener noreferrer" className={styles.projects}>Projects</a>
          </Link>
          <Link href="mailto://hi@aabis.xyz">
            <a className={styles.skills}>Contact</a>
          </Link>
        </div>
        <div
          className="absolute right-0"
        >
          <Image src={Line} />
        </div>
        <Footer />
      </main>

    </div>
  );
};

export default Index;
