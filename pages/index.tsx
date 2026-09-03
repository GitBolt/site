/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import { CardData, ExpandableCard } from '@/components/ExpandableCard';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';

const experience: CardData[] = [
  {
    logo: '/logos/spacexai.svg',
    title: 'campus lead',
    subtitle: '@ spacexai · uiuc',
    summary: 'Selected for the first campus-lead cohort, representing UIUC across developer education and community programming.',
    bullets: [
      'One of 40 leads selected across the program’s first cohort.',
      'Organizing workshops, hackathons, and collaborations with student developer communities.',
      'Sharing product feedback from students building with Cursor and Grok.',
    ],
    links: [
      { label: 'announcement', href: 'https://www.linkedin.com/posts/0xbolt_ill-be-representing-university-of-illinois-activity-7486972381840826368-Qo1w' },
      { label: 'post on x', href: 'https://x.com/0xBolt/status/2091614481860231402' },
      { label: 'campus leads', href: 'https://cursor.com/campus-leads' },
    ],
    image: '/photos/spacexai-announcement.svg',
    imageAlt: 'SpaceXAI campus lead announcement card',
  },
  {
    logo: '/logos/spicenet.jpg',
    title: 'founding protocol engineer',
    subtitle: '@ spicenet',
    summary: 'Worked across protocol and product: from Rust trading vaults to the Spicenet rollup and the SpiceFlow TypeScript/React SDK.',
    bullets: [
      'Built and maintained the embeddable SpiceFlow funding experience used inside partner apps.',
      'Developed transaction paths spanning wallets, cross-chain funding, the rollup, and destination execution.',
      'Earlier work included on-chain orderbook infrastructure and Rust trading vaults.',
    ],
    links: [
      { label: 'spicenet', href: 'https://spicenet.io' },
      { label: 'spiceflow', href: 'https://www.npmjs.com/package/@spicenet-io/spiceflow-ui' },
      { label: 'public beta release', href: 'https://x.com/spicenetio/status/2089352984597762197' },
    ],
    image: '/photos/spiceflow.png',
    imageAlt: 'SpiceFlow deposit interface',
  },
  {
    logo: '/logos/lri.png',
    title: 'engine fluids + admin director',
    subtitle: '@ liquid rocketry at illinois',
    summary: 'Building the feed system and test stand for Overture Mk1 while also having led the organization’s website and administration.',
    bullets: [
      'Cut, bent, flared, and installed IPA/LOX tubing, fittings, and valves from P&IDs.',
      'Ran water-flow, pressurization, and cold-flow procedures across the engine test campaign.',
      'Supported fluids and test-stand operations for Illinois’ first collegiate liquid-bipropellant hotfire on May 3, 2026.',
      'Rebuilt the team website in Next.js, then served as Administrative Director.',
    ],
    links: [
      { label: 'liquid rocketry', href: 'https://www.liquidrocket.org' },
      { label: 'hotfire', href: 'https://www.liquidrocket.org/engine' },
    ],
    image: '/photos/lri-hotfire.jpg',
    imageAlt: 'Overture Mk1 during its first hotfire',
  },
  {
    logo: '/logos/stellarsol.jpg',
    title: 'founder',
    subtitle: '@ stellarsol',
    summary: 'Co-founded a Solana payments and automation product and led its engineering through the Solana Summer Camp hackathon.',
    bullets: [
      'Placed second globally among 750 submitted teams and received a $30,000 prize.',
      'Led client-side automation and payment API development.',
      'Received a $6,000 Solana Foundation development grant.',
    ],
    links: [
      { label: 'stellarsol on x', href: 'https://x.com/stellarsolapp' },
      { label: 'summer camp results', href: 'https://solana.com/news/solana-summer-camp-winners' },
    ],
    image: '/photos/stellarsol.svg',
    imageAlt: 'StellarSOL hackathon runner-up card',
  },
  {
    logo: '/logos/superteam_earn.png',
    title: 'founding team',
    subtitle: '@ superteam earn',
    summary: 'Helped build the first frontend for Superteam’s opportunity platform, bringing bounties, grants, and jobs into one product.',
    bullets: [
      'Worked on the founding product team and shipped the initial user-facing experience.',
      'Built the dynamic social-card service used to generate shareable opportunity images.',
      'Built around on-chain proof of work and escrow-backed opportunities.',
      'The early platform reached roughly 1,500 weekly viewers while listing millions of dollars in opportunities.',
    ],
    links: [
      { label: 'superteam earn', href: 'https://earn.superteam.fun' },
      { label: 'product hunt launch', href: 'https://www.producthunt.com/products/superteam-earn' },
    ],
    image: '/photos/superteam-earn.svg',
    imageAlt: 'Superteam Earn Product Hunt launch card',
  },
  {
    logo: '/logos/summer.svg',
    title: 'mentor + organizer',
    subtitle: '@ solana summer fellowship',
    summary: 'Core-team organizer and mentor for an eight-week global program supporting 42 early Solana builders.',
    bullets: [
      'Selected 42 fellows from 583 applicants across 15 countries.',
      'Helped run 23 sessions and personally led four of the nine primary technical sessions.',
      'Sourced speakers, created slide templates, and supported fellows through project development.',
    ],
    links: [{ label: 'fellowship', href: 'https://summer.superteam.fun' }],
    image: '/photos/fellowship.svg',
    imageAlt: 'Solana Summer Fellowship cohort metrics',
  },
  {
    logo: '/logos/solana.png',
    title: 'devrel intern',
    subtitle: '@ solana foundation',
    summary: 'Spent a month helping developers get from zero to their first working Solana program through hands-on workshops.',
    bullets: [
      'Designed and delivered four developer workshops in September 2023.',
      'Built a first poll dApp workshop and supporting examples for new Solana developers.',
    ],
    links: [
      { label: 'solana foundation', href: 'https://solana.org' },
      { label: 'workshop code', href: 'https://github.com/solana-developers' },
    ],
    image: '/photos/solana-workshops.svg',
    imageAlt: 'Four Solana developer workshops',
  },
];

const projects: CardData[] = [
  {
    logo: '/logos/pythia.jpg',
    title: 'pythia markets',
    subtitle: '$18k winner at cypherpunk 2025 · prediction markets infra',
    summary: 'Confidential prediction-market infrastructure built by a four-person team for Colosseum’s Cypherpunk hackathon.',
    bullets: [
      'Built the complete Solana program and directed the Arcium confidential-computation integration.',
      'Owned core web integration, design language, launch assets, and much of the public release work.',
      'Won the $10,000 University Prize and the $8,000 Arcium sidetrack among 1,576 submissions.',
    ],
    links: [{ label: 'view on colosseum', href: 'https://arena.colosseum.org/projects/explore/pythia' }],
    image: '/photos/pythia.svg',
    imageAlt: 'Pythia Cypherpunk hackathon awards',
  },
  {
    logo: '/logos/swift.webp',
    title: 'asymmed',
    subtitle: 'swift student challenge winner · built in 4 days without a mac',
    summary: 'An interactive Swift app that explains asymmetric encryption through a practical blockchain transaction.',
    bullets: [
      'Self-taught Swift and shipped the submission in four days using remote Macs.',
      'Won Apple’s 2023 Swift Student Challenge.',
    ],
    links: [
      { label: 'winner profile', href: 'https://www.wwdcscholars.com/s/19C9A545-D5DF-451B-963D-382EC0AFE370/2023' },
      { label: 'github', href: 'https://github.com/GitBolt/AsymmED' },
    ],
    image: '/photos/asymmed.svg',
    imageAlt: 'AsymmED Swift Student Challenge winner card',
  },
  {
    logo: '/logos/superteam_ctf.ico',
    title: 'superteam ctf',
    subtitle: 'two security events · challenge designer + organizer',
    summary: 'Designed the majority of the crypto, smart-contract, reverse-engineering, and systems challenges for two in-person Superteam CTFs.',
    bullets: [
      'Created all 15 challenges for the first Microsoft-hosted event in Bengaluru.',
      'Returned for v2, where 50 competitors were selected for 11 challenges and $4,000 in prizes.',
      'Built challenge infrastructure, authored exploits, and presented the event on site.',
    ],
    links: [
      { label: 'play ctf', href: 'https://ctf.superteam.fun' },
      { label: 'event recap', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7487727447392829440/' },
    ],
    image: '/photos/ctf-stage.png',
    imageAlt: 'A CTF challenge stage from the second Superteam CTF',
  },
  {
    logo: '/logos/mbc.png',
    title: 'flume + optionsfi',
    subtitle: 'two prizes at mbc ’25 ($5k) · built overnight',
    summary: 'A one-night sprint at the Midwest Blockchain Conference produced two prize-winning Solana projects.',
    bullets: [
      'Built Flume solo: a visual drag-and-drop interface for composing DeFi actions.',
      'Also helped ship OptionsFi during the same overnight build.',
      'Placed fourth and second respectively, earning $5,000 across 48 Solana submissions.',
    ],
    links: [{ label: 'mbc project gallery', href: 'https://mbc.devpost.com/project-gallery' }],
    image: '/photos/mbc.svg',
    imageAlt: 'Flume and OptionsFi hackathon results',
  },
  {
    logo: '/logos/discord.png',
    title: 'disbet',
    subtitle: 'sandstorm hackathon winner · built in 4 hours',
    summary: 'A Discord-native sports-betting experience built four hours before the Sandstorm hackathon deadline.',
    bullets: [
      'Turned sportsbook interactions into a familiar Discord bot workflow.',
      'Won the sports-betting UX track, a $3,000 prize, and two Breakpoint 2023 tickets.',
    ],
    links: [{ label: 'winner announcement', href: 'https://www.prnewswire.com/news-releases/betdex-announces-disbet-as-winner-of-solana-hackathon-sports-betting-ux-track-301740713.html' }],
    image: '/photos/disbet.svg',
    imageAlt: 'Disbet Sandstorm winner card',
  },
  {
    logo: '/logos/solathon.svg',
    title: 'solathon',
    subtitle: '150k+ downloads · python sdk for solana',
    summary: 'An open-source, typed Python SDK for interacting with Solana RPCs and transactions.',
    bullets: [
      'Core maintainer across 45 contributions from 13 independent contributors.',
      'Received a $3,000 Superteam Instagrant for continued development.',
      'Grew to more than 150,000 package downloads.',
    ],
    links: [
      { label: 'documentation', href: 'https://solathon.vercel.app' },
      { label: 'github', href: 'https://github.com/GitBolt/solathon' },
    ],
    image: '/photos/solathon.png',
    imageAlt: 'Solathon documentation preview',
  },
  {
    logo: '/logos/salt.ico',
    title: 'salt analysis',
    subtitle: 'interactive chemistry workflow · used in 50 countries',
    summary: 'A practical, step-by-step decision tool for identifying salts in school chemistry labs.',
    bullets: [
      'Turns a branching qualitative-analysis flowchart into a guided interactive workflow.',
      'Reached 2,400 unique users and 9,000 pageviews across 50 countries by July 2025.',
    ],
    links: [
      { label: 'open salt analysis', href: 'https://saltanalysis.com' },
      { label: 'github', href: 'https://github.com/GitBolt/saltanalysis' },
    ],
    image: '/photos/saltanalysis.png',
    imageAlt: 'Salt Analysis workflow preview',
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
            {experience.map((exp) => <ExpandableCard key={exp.title} card={exp} variant="work" />)}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>projects</div>
          <div className={styles.projectList}>
            {projects.map((proj) => <ExpandableCard key={proj.title} card={proj} variant="project" />)}
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
            <a href="mailto:hi@aab.is">
              hi@aab.is
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
