import React, {
  useEffect, useId, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from '@/styles/Index.module.scss';
import { inter } from '@/styles/fonts';

export type CardLink = { label: string; href: string };

type SharedCardMedia = {
  src: string;
  alt: string;
  caption: string;
  href?: string;
};

type CardImageMedia = SharedCardMedia & {
  type?: 'image';
  width: number;
  height: number;
  position?: string;
};

type CardVideoMedia = SharedCardMedia & {
  type: 'video';
  poster?: string;
  captions: string;
};

export type CardMedia = CardImageMedia | CardVideoMedia;

export type CardData = {
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  links: CardLink[];
  media?: CardMedia[];
};

type ExpandableCardProps = { card: CardData; variant: 'work' | 'project' };
type ModalDialogElement = HTMLDialogElement & { showModal: () => void };

const Media = function Media({ item }: { item: CardMedia }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<ModalDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const captionId = useId();

  useEffect(() => {
    if (!isOpen) return undefined;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      const computedPaddingRight = Number.parseFloat(
        getComputedStyle(document.body).paddingRight,
      ) || 0;
      document.body.style.paddingRight = `${computedPaddingRight + scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';
    if (dialog && !dialog.hasAttribute('open')) dialog.showModal();
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  const closeLightbox = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const content = item.type === 'video' ? (
    <video controls playsInline preload="none" poster={item.poster} aria-label={item.alt}>
      <source src={item.src} type="video/mp4" />
      <track kind="captions" src={item.captions} srcLang="en" label="English" />
    </video>
  ) : (
    <span className={styles.mediaVisual}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 400px) 82vw, (max-width: 800px) 320px, 300px"
        className={styles.mediaImage}
        style={{ objectPosition: item.position }}
      />
    </span>
  );

  return (
    <figure className={styles.mediaItem}>
      {item.type === 'video' ? content : (
        <button
          ref={triggerRef}
          type="button"
          className={styles.mediaOpenButton}
          onClick={() => setIsOpen(true)}
          aria-label={`${item.alt} — view full screen`}
        >
          {content}
        </button>
      )}
      <figcaption>
        {item.href && item.type === 'video' ? (
          <a href={item.href} target="_blank" rel="noreferrer">
            {item.caption}
            <span aria-hidden="true"> ↗</span>
          </a>
        ) : item.caption}
      </figcaption>
      {isOpen && item.type !== 'video' && createPortal(
        <dialog
          ref={dialogRef}
          className={`${styles.lightbox} ${inter.className}`}
          aria-modal="true"
          aria-label={item.alt}
          aria-describedby={captionId}
          onCancel={(event) => {
            event.preventDefault();
            closeLightbox();
          }}
        >
          <button
            type="button"
            className={styles.lightboxBackdrop}
            tabIndex={-1}
            aria-hidden="true"
            onClick={closeLightbox}
          />
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close full-screen image"
          >
            <span aria-hidden="true">×</span>
          </button>
          <figure className={styles.lightboxContent}>
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 800px) 94vw, 90vw"
              quality={90}
              loading="eager"
            />
            <figcaption id={captionId}>{item.caption}</figcaption>
          </figure>
        </dialog>,
        document.body,
      )}
    </figure>
  );
};

export const ExpandableCard = function ExpandableCard({ card, variant }: ExpandableCardProps) {
  return (
    <details className={`${styles.card} ${variant === 'project' ? styles.project : ''}`}>
      <summary className={styles.cardSummary}>
        <Image
          className={styles.cardLogo}
          src={card.logo}
          width={18}
          height={18}
          sizes="18px"
          alt=""
          loading="lazy"
          unoptimized={card.logo.endsWith('.svg') || card.logo.endsWith('.ico')}
        />
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
          {card.links.length > 0 && (
            <div className={styles.cardLinks}>
              {card.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                  <span aria-hidden="true"> ↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
        {card.media && card.media.length > 0 && (
          <div className={styles.mediaRail} role="group" aria-label={`${card.title} evidence`}>
            {card.media.map((item) => <Media key={item.src} item={item} />)}
          </div>
        )}
      </div>
    </details>
  );
};
