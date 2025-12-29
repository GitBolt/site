/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';

const experience = [
  {
    logo: '/logos/spicenet.jpg',
    title: 'protocol engineer',
    company: 'spicenet',
    link: 'https://spicenet.io',
  },
  {
    logo: '/logos/lri.png',
    title: 'website chair + engines team',
    company: 'liquid rocketry at illinois',
    link: 'https://www.liquidrocket.org',
  },
  {
    logo: '/logos/stellarsol.jpg',
    title: 'founder',
    company: 'stellarsol',
    link: 'https://x.com/stellarsolapp',
  },
  {
    logo: '/logos/superteam_earn.png',
    title: 'founding team',
    company: 'superteam earn',
    link: 'https://earn.superteam.fun',
  },
  {
    logo: '/logos/summer.svg',
    title: 'mentor + organizer',
    company: 'solana summer fellowship',
    link: 'https://summer.superteam.fun',
  },
  {
    logo: '/logos/solana.png',
    title: 'devrel intern',
    company: 'solana foundation',
    link: 'https://solana.org',
  },
  {
    logo: '/logos/lancer.jpg',
    title: 'fullstack dev',
    company: 'lancer',
    link: 'https://x.com/lancerworks',
  },
];

const projects = [
  {
    logo: '/logos/swift.webp',
    title: 'asymmed',
    desc: 'swift student challenge winner · learned swift & built project in 4 days without a mac',
    link: 'https://www.wwdcscholars.com/s/19C9A545-D5DF-451B-963D-382EC0AFE370/2023',
  },
  {
    logo: '/logos/mbc.png',
    title: 'flume + optionsfi',
    desc: 'two prizes at MBC\'25 · built both projects overnight',
    link: 'https://mbc.devpost.com/project-gallery',
  },
  {
    logo: '/logos/discord.png',
    title: 'disbet',
    desc: 'sandstorm hackathon winner · built 4h before deadline',
    link: 'https://www.prnewswire.com/news-releases/betdex-announces-disbet-as-winner-of-solana-hackathon-sports-betting-ux-track-301740713.html',
  },
  {
    logo: '/logos/solathon.svg',
    title: 'solathon',
    desc: '130k+ downloads · python sdk for solana',
    link: 'https://solathon.vercel.app',
  },
  {
    logo: '/logos/salt.ico',
    title: 'salt analysis',
    desc: '5k+ users · find series of experiments to detect any salt',
    link: 'https://saltanalysis.com',
  },
];

const Index: NextPage = function Index() {
  return (
    <div className={styles.index}>
      <PageHead />
      <div className={styles.content}>
        <div className={styles.mainBox}>
          <h1>hi, i&apos;m aabis</h1>
          <p className={styles.tagline}>into space, software, and startups</p>
          <p className={styles.uiucLine}>
            aerospace @
            {' '}
            <a
              href="https://aerospace.illinois.edu"
              target="_blank"
              rel="noreferrer"
              className={styles.uiucLink}
            >
              <img src="/logos/uiuc.png" alt="uiuc" />
              <span>UIUC</span>
            </a>
          </p>

        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>work</div>
          <div className={styles.chipGrid}>
            {experience.map((exp, i) => (
              <a
                key={i}
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className={styles.chip}
              >
                <img src={exp.logo} alt="" />
                <div className={styles.chipText}>
                  <span className={styles.highlight}>{exp.title}</span>
                  <span className={styles.dimmed}>
                    @
                    {exp.company}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>projects</div>
          <div className={styles.projectList}>
            {projects.map((proj, i) => (
              <a
                key={i}
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className={styles.projectItem}
              >
                <img src={proj.logo} alt="" />
                <div className={styles.projectContent}>
                  <span className={styles.projectTitle}>{proj.title}</span>
                  <span className={styles.projectDesc}>{proj.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.dmsText}>
            my DMs are always open on
            {' '}
            <a
              href="https://twitter.com/0xBolt"
              target="_blank"
              rel="noreferrer"
            >
              X
            </a>
            {' '}
            ·
            {' '}
            <a href="mailto:mail@aabis.dev">
              mail@aabis.dev
            </a>
          </p>
        </div>
      </div>

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
