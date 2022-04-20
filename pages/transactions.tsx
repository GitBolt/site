import React from 'react';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';

const Index: NextPage = function Index() {
  return (
    <div className={styles.index}>
      <PageHead />
      <main className={styles.main}>
        <h1 className="text-6xl text-bold text-white">I&apos;ll probably add something here soon</h1>
        <Footer />
      </main>

    </div>
  );
};

export default Index;
