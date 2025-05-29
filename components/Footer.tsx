import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';
import Twitter from '@/public/icons/twitter.svg';
import Discord from '@/public/icons/discord.svg';
import GitHub from '@/public/icons/github.svg';
import LinkedIn from '@/public/icons/linkedin.svg';

export const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
      <span>SYED AABIS AKHTAR | 2024 &#169;</span>
      <div className="flex gap-3">
        <Link href="https://twitter.com/0xBolt" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image src={Twitter} height="30px" width="40px" />
          </a>
        </Link>

        <Link href="https://github.com/GitBolt" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image src={GitHub} height="30px" width="40px" />
          </a>
        </Link>

        <Link href="https://linkedin.com/in/0xbolt" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image src={LinkedIn} height="30px" width="40px" />
          </a>
        </Link>
      </div>

    </footer>
  );
};
