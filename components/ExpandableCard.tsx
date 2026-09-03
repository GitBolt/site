/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/Index.module.scss';

export type CardLink = {
  label: string;
  href: string;
};

export type CardData = {
  logo: string;
  title: string;
  subtitle: string;
  summary: string;
  bullets: string[];
  links: CardLink[];
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
};

type ExpandableCardProps = {
  card: CardData;
  variant: 'work' | 'project';
};

export const ExpandableCard = function ExpandableCard({ card, variant }: ExpandableCardProps) {
  return (
    <details className={`${styles.card} ${styles[variant]}`}>
      <summary className={styles.cardSummary}>
        <img className={styles.cardLogo} src={card.logo} alt="" />
        <span className={styles.cardHeading}>
          <span className={styles.cardTitle}>{card.title}</span>
          <span className={styles.cardSubtitle}>{card.subtitle}</span>
        </span>
        <span className={styles.cardHint} aria-hidden="true">
          <span>details</span>
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </summary>

      <div className={styles.cardDetails}>
        <div className={styles.cardCopy}>
          <p>{card.summary}</p>
          <ul>
            {card.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <div className={styles.cardLinks}>
            {card.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            ))}
          </div>
        </div>
        {card.image && (
          <figure className={styles.cardMedia}>
            <img
              src={card.image}
              alt={card.imageAlt || ''}
              style={{ objectPosition: card.imagePosition }}
              loading="lazy"
            />
          </figure>
        )}
      </div>
    </details>
  );
};
