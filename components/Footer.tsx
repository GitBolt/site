import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';
import XIcon from '@/public/icons/x.svg';
import GitHub from '@/public/icons/github.svg';
import LinkedIn from '@/public/icons/linkedin.svg';

export const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glassBar}>
        <nav className={styles.icons} aria-label="Social links">
          <Link href="https://twitter.com/0xBolt" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="Aabis on X">
              <Image src={XIcon} height={18} width={18} alt="" />
            </a>
          </Link>

          <Link href="https://github.com/GitBolt" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="Aabis on GitHub">
              <Image src={GitHub} height={18} width={18} alt="" />
            </a>
          </Link>

          <Link href="https://linkedin.com/in/0xbolt" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="Aabis on LinkedIn">
              <Image src={LinkedIn} height={18} width={18} alt="" />
            </a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};
