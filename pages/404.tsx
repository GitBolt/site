import React from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';
import styles from '@/styles/NotFound.module.scss';

const NotFound: NextPage = function NotFound() {
  return (
    <div className={styles.page}>
      <PageHead
        title="Page not found — Syed Aabis Akhtar"
        description="The page you were looking for could not be found."
        canonicalPath={null}
        noIndex
      />
      <main className={styles.content}>
        <p className={styles.code}>404</p>
        <h1>page not found</h1>
        <p className={styles.message}>That page doesn&apos;t exist or may have moved.</p>
        <Link href="/" className={styles.homeLink}>back home</Link>
      </main>
    </div>
  );
};

export default NotFound;
