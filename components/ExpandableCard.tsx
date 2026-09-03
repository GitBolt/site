/* eslint-disable @next/next/no-img-element, jsx-a11y/media-has-caption */
import React from 'react';
import styles from '@/styles/Index.module.scss';

export type CardLink = { label: string; href: string };

export type CardMedia = {
  src: string;
  type?: 'image' | 'video';
  alt: string;
  caption: string;
  href?: string;
  poster?: string;
  position?: string;
};

export type CardData = {
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  links: CardLink[];
  media?: CardMedia[];
};

type ExpandableCardProps = { card: CardData; variant: 'work' | 'project' };

const Media = function Media({ item }: { item: CardMedia }) {
  const content = item.type === 'video' ? (
    <video controls playsInline preload="metadata" poster={item.poster} aria-label={item.alt}>
      <source src={item.src} type="video/mp4" />
    </video>
  ) : (
    <img src={item.src} alt={item.alt} style={{ objectPosition: item.position }} loading="lazy" />
  );

  return (
    <figure className={styles.mediaItem}>
      {item.href && item.type !== 'video' ? (
        <a href={item.href} target="_blank" rel="noreferrer" aria-label={`${item.alt} — open source`}>
          {content}
        </a>
      ) : content}
      <figcaption>
        {item.href && item.type === 'video' ? (
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.caption}
            <span aria-hidden="true"> ↗</span>
          </a>
        ) : item.caption}
      </figcaption>
    </figure>
  );
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
          <p>{card.description}</p>
          <div className={styles.cardLinks}>
            {card.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            ))}
          </div>
        </div>
        {card.media && card.media.length > 0 && (
          <div className={styles.mediaRail} aria-label={`${card.title} evidence`}>
            {card.media.map((item) => <Media key={item.src} item={item} />)}
          </div>
        )}
      </div>
    </details>
  );
};
