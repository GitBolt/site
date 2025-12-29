import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';
import Twitter from '@/public/icons/twitter.svg';
import GitHub from '@/public/icons/github.svg';
import LinkedIn from '@/public/icons/linkedin.svg';

export const Footer = function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glassBar}>
        <span>
          SYED AABIS AKHTAR |
          {' '}
          {year}
          {' '}
          &#169;
        </span>
        <div className={styles.icons}>
          <Link href="https://twitter.com/0xBolt" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={Twitter} height={18} width={18} alt="Twitter" />
            </a>
          </Link>

          <Link href="https://github.com/GitBolt" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={GitHub} height={18} width={18} alt="GitHub" />
            </a>
          </Link>

          <Link href="https://linkedin.com/in/0xbolt" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image src={LinkedIn} height={18} width={18} alt="LinkedIn" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
