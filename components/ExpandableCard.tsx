import React, {
  useEffect, useId, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from '@/styles/Index.module.scss';
import { inter } from '@/styles/fonts';
import { Arrow } from '@/components/Arrow';

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
            <Arrow />
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

const PANEL_GAP = 8;
const VIEWPORT_MARGIN = 16;

type PanelProps = {
  card: CardData;
  isOpen: boolean;
  panelId: string;
  cardId: string;
  row: number;
};

const Panel = function Panel({
  card, isOpen, panelId, cardId, row,
}: PanelProps) {
  const surfaceRef = useRef<HTMLDivElement>(null);
  // Media mounts on first open so closed cards never fetch images or posters.
  const [hasOpened, setHasOpened] = useState(false);
  if (isOpen && !hasOpened) setHasOpened(true);

  useEffect(() => {
    if (!isOpen) return;
    const trigger = document.getElementById(cardId);
    const surface = surfaceRef.current;
    if (!trigger || !surface) return;

    // Bring the whole panel into view while it grows, without scrolling its card away.
    const triggerRect = trigger.getBoundingClientRect();
    const finalBottom = triggerRect.bottom + PANEL_GAP + surface.offsetHeight + VIEWPORT_MARGIN;
    const overflow = finalBottom - window.innerHeight;
    const room = triggerRect.top - VIEWPORT_MARGIN;
    if (overflow <= 0 || room <= 0) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollBy({ top: Math.min(overflow, room), behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [isOpen, cardId]);

  return (
    <div
      id={panelId}
      className={styles.panel}
      role="region"
      aria-labelledby={cardId}
      data-open={isOpen}
      style={{ '--row': row } as React.CSSProperties}
    >
      <div className={styles.panelClip}>
        <div ref={surfaceRef} className={styles.panelSurface}>
          <div className={styles.cardCopy}>
            <p>{card.description}</p>
            {card.links.length > 0 && (
              <div className={styles.cardLinks}>
                {card.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <Arrow />
                  </a>
                ))}
              </div>
            )}
          </div>
          {hasOpened && card.media && card.media.length > 0 && (
            <div className={styles.mediaRail} role="group" aria-label={`${card.title} media`}>
              {card.media.map((item) => <Media key={item.src} item={item} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const CardGrid = function CardGrid({ cards }: { cards: CardData[] }) {
  const baseId = useId();
  const [openCards, setOpenCards] = useState<ReadonlySet<number>>(() => new Set());

  const toggle = (index: number) => {
    // Two-column layout shares one panel slot per row, so a row shows one story at a time.
    const twoColumns = window.matchMedia('(min-width: 801px)').matches;
    const rowPartner = index % 2 === 0 ? index + 1 : index - 1;

    setOpenCards((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (twoColumns) next.delete(rowPartner);
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={styles.cardGrid}>
      {cards.map((card, index) => {
        const isOpen = openCards.has(index);
        const cardId = `${baseId}card-${index}`;
        const panelId = `${baseId}panel-${index}`;
        const row = Math.floor(index / 2);

        return (
          <React.Fragment key={card.title}>
            <button
              id={cardId}
              type="button"
              className={styles.card}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              style={{ '--row': row } as React.CSSProperties}
            >
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
              <svg className={styles.cardChevron} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <Panel card={card} isOpen={isOpen} panelId={panelId} cardId={cardId} row={row} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
