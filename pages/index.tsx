import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import { CardData, ExpandableCard } from '@/components/ExpandableCard';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';

const aerospace: CardData[] = [
  {
    logo: '/logos/lri.png',
    title: 'Liquid Rocketry at Illinois',
    subtitle: 'liquid rocket engine testing + team leadership',
    description: 'Built and tested feed-system hardware for RAND-E, our student-developed liquid bipropellant rocket engine test-stand. Contributed to tube fabrication, plumbing, water-flow, cold-flow, and hotfire operations. Also rebuilt the team website and later served as the team\'s Administrative Director.',
    links: [
      { label: 'team website', href: 'https://www.liquidrocket.org' },
      { label: 'may 2026 hotfire', href: 'https://www.linkedin.com/posts/liquid-rocket-illinois_on-sunday-may-3rd-lri-had-our-first-hotfire-activity-7460779425371037697-9cob' },
    ],
    media: [
      {
        src: '/media/lri/overture-hotfire.mp4',
        type: 'video',
        poster: '/media/lri/overture-hotfire-poster.jpg',
        captions: '/captions/overture-hotfire.vtt',
        alt: 'Overture Mk1 engine firing on the test stand during its first hotfire',
        caption: 'Overture Mk1 · first hotfire · May 3, 2026',
      },
      {
        src: '/media/lri/overture-cold-flow.mp4',
        type: 'video',
        poster: '/media/lri/overture-cold-flow-poster.jpg',
        captions: '/captions/overture-cold-flow.vtt',
        alt: 'Overture Mk1 feed system during a cold-flow test',
        caption: 'Overture Mk1 Engine · cold-flow test · Apr. 14, 2026',
      },
      {
        src: '/media/lri/overture-hotfire.jpg',
        width: 1600,
        height: 780,
        alt: 'Overture Mk1 engine firing on the test stand',
        caption: 'Overture Mk1 Engine · first hotfire · May 3, 2026',
      },
      {
        src: '/media/lri/overture-engine.jpg', width: 1600, height: 1200, alt: 'Overture Mk1 liquid rocket engine', caption: 'Overture Mk1 engine hardware',
      },
    ],
  },
  {
    logo: '/logos/quadcopter.jpg',
    title: 'Carbon-fiber quadcopter',
    subtitle: 'personal drone build · 2026',
    description: 'Built a roughly 2 kg carbon-fiber quadcopter. Integrated the airframe, motors, power supply, radio, and flight-control systems before iterating through bench and outdoor flight tests.',
    links: [],
    media: [
      {
        src: '/media/drone/quadcopter-display.jpg',
        width: 1612,
        height: 1614,
        alt: 'The carbon-fiber quadcopter on display in Miami Beach',
        caption: 'Carbon-fiber quadcopter on display · Consensus Miami Conference · May 2026',
      },
      {
        src: '/media/drone/quadcopter-night-flight-web.mp4',
        type: 'video',
        poster: '/media/drone/quadcopter-night-flight-poster.jpg',
        captions: '/captions/quadcopter-night-flight.vtt',
        alt: 'The carbon-fiber quadcopter hovering during a night flight test',
        caption: 'Night flight test · Feb. 27, 2026',
      },
    ],
  },
  {
    logo: '/logos/anduril.png',
    title: 'Anduril AI Grand Prix',
    subtitle: 'autonomous drone racing · spring 2026',
    description: 'Built a GPS-denied vision and control stack for Anduril’s autonomous drone-racing competition using OpenCV, IMU guidance, and a racing-line controller. Advanced past Round 1 with no crashes in the evaluated runs.',
    links: [{ label: 'ai grand prix', href: 'https://www.anduril.com/news/anduril-launches-the-ai-grand-prix-a-global-autonomous-drone-race' }],
  },
  {
    logo: '/logos/nmcad.png',
    title: 'NMCAD Lab',
    subtitle: 'aerospace materials research intern · IISc',
    description: 'Developed a k-nearest-neighbor analyzer for syntactic foam, a lightweight composite used in aerospace and marine structures, and rebuilt the lab website during a research internship at the Indian Institute of Science.',
    links: [],
  },
];

const experience: CardData[] = [
  {
    logo: '/logos/spacexai.png',
    title: 'SpaceXAI',
    subtitle: 'AI developer community lead · UIUC',
    description: 'Representing UIUC in SpaceXAI’s campus program through developer workshops, hackathons, build nights, and student collaborations.',
    links: [{ label: 'role announcement', href: 'https://x.com/aabisbuilds/status/2091614481860231402' }],
  },
  {
    logo: '/logos/spicenet.jpg',
    title: 'Spicenet',
    subtitle: 'founding engineer · blockchain infrastructure',
    description: 'Built Rust trading vaults, rollup infrastructure, and the TypeScript SDK for the core product, SpiceFlow. The SDK powered applications for 30,000+ users.',
    links: [
      { label: 'spicenet', href: 'https://spicenet.io' },
      { label: 'spiceflow package', href: 'https://www.npmjs.com/package/@spicenet-io/spiceflow-ui' },
    ],
    media: [
      {
        src: '/media/work/spiceflow-deposit.png',
        width: 1280,
        height: 800,
        alt: 'SpiceFlow network selector',
        caption: 'SpiceFlow funding flow',
      },
    ],
  },
  {
    logo: '/logos/stellarsol.jpg',
    title: 'StellarSOL',
    subtitle: 'crypto payments founder · 2nd of 750',
    description: 'Co-founded a Solana payments product and led its engineering through the Summer Camp hackathon, placing second in the Payments track among 750 submissions. StellarSOL later received a Solana Foundation grant and I was featured by The Information.',
    links: [
      { label: 'stellarsol on x', href: 'https://x.com/stellarsolapp' },
      { label: 'summer camp results', href: 'https://solana.com/news/solana-summer-camp-winners' },
      { label: 'product demo', href: 'https://x.com/aabisbuilds/status/1547898009484402689' },
      { label: 'launch thread', href: 'https://x.com/StellarSolApp/status/1544300773533962240' },
      { label: 'the information', href: 'https://www.theinformation.com/articles/here-come-the-zoomers-silicon-valley-greets-a-new-generation-of-teen-founders' },
    ],
    media: [
      {
        src: '/media/work/the-information-profile.jpg',
        width: 1200,
        height: 988,
        alt: 'The Crypto Prodigies section featuring me',
        caption: 'The Information · “The Crypto Prodigies” · Mar. 2023',
      },
      {
        src: '/media/work/the-information-excerpt.jpg',
        width: 1200,
        height: 406,
        alt: 'The Information excerpt on me',
        caption: 'Article excerpt on me',
      },
      {
        src: '/media/work/stellarsol-demo.mp4',
        type: 'video',
        poster: '/media/work/stellarsol-demo-poster.jpg',
        captions: '/captions/stellarsol-demo.vtt',
        alt: 'StellarSOL browser extension purchasing an item from Flipkart with USDC',
        caption: 'Buying from Flipkart with USDC through StellarSOL · product demo',
        href: 'https://x.com/aabisbuilds/status/1547898009484402689',
      },
    ],
  },
  {
    logo: '/logos/superteam_earn.png',
    title: 'Superteam Earn',
    subtitle: 'founding team · crypto jobs marketplace',
    description: 'Helped build the original frontend for Superteam’s bounties, grants, and jobs platform. The early product reached roughly 1,500 weekly viewers while listing millions of dollars in opportunities.',
    links: [
      { label: 'superteam earn', href: 'https://earn.superteam.fun' },
      { label: 'product hunt', href: 'https://www.producthunt.com/products/superteam-earn' },
    ],
    media: [{
      src: '/media/work/superteam-earn-product-hunt.jpg',
      width: 1400,
      height: 700,
      alt: 'Superteam Earn interface on its Product Hunt launch page',
      caption: 'Superteam Earn launch on Product Hunt',
    }],
  },
  {
    logo: '/logos/summer.svg',
    title: 'Solana Summer Fellowship',
    subtitle: 'builder program mentor · $100k sponsorships',
    description: 'Organized and mentored an eight-week program for 42 builders selected from 583 applicants across 15 countries, helping run the curriculum, technical sessions, and project support.',
    links: [{ label: 'fellowship archive', href: 'https://summer.superteam.fun' }],
  },
  {
    logo: '/logos/solana.png',
    title: 'Solana Foundation',
    subtitle: 'developer relations intern · 4 university workshops',
    description: 'Designed and delivered four hands-on developer workshops across four universities, drawing 1,000 registrations and helping participants mint more than 300 NFTs. The curriculum included a first Solana program, a bank simulator, and a poll application.',
    links: [
      { label: 'workshop metrics', href: 'https://x.com/aabisbuilds/status/1696191692330676230' },
      { label: 'bank workshop', href: 'https://github.com/GitBolt/solana-bank-workshop' },
      { label: 'poll workshop', href: 'https://github.com/GitBolt/solana-poll' },
    ],
    media: [{
      src: '/media/work/solana-workshop-metrics.jpg',
      width: 1824,
      height: 826,
      alt: 'Metrics from four Solana university workshops',
      caption: '4 university workshops · 1,000 registrations · 300+ NFTs',
    }],
  },
];

const projects: CardData[] = [
  {
    logo: '/logos/pythia.jpg',
    title: 'Pythia Markets',
    subtitle: 'prediction markets · $18k hackathon winner',
    description: 'Built the Solana program and led the Arcium confidential-computation integration for private prediction markets. Won the $10,000 University Prize and $8,000 Arcium track among 1,576 submissions.',
    links: [
      { label: 'Colosseum winner announcement', href: 'https://blog.colosseum.com/announcing-the-winners-of-the-solana-cypherpunk-hackathon/#university-award' },
      { label: 'Arcium winner feature', href: 'https://arcium.substack.com/p/introducing-the-winners-of-arciums' },
      { label: 'project entry', href: 'https://arena.colosseum.org/projects/explore/pythia' },
    ],
  },
  {
    logo: '/logos/swift.webp',
    title: 'AsymmED',
    subtitle: 'apple swift student challenge winner · built in 4 days',
    description: 'Built an interactive app explaining asymmetric encryption after learning Swift from scratch in four days, developing remotely on a friend\'s Mac over TeamViewer.',
    links: [
      { label: 'winner profile', href: 'https://www.wwdcscholars.com/s/19C9A545-D5DF-451B-963D-382EC0AFE370/2023' },
      { label: 'source code', href: 'https://github.com/GitBolt/AsymmED' },
    ],
    media: [
      {
        src: '/media/projects/asymmed-award.jpg', width: 1200, height: 900, alt: 'The WWDC23 Swift Student Challenge award, AirPods Pro, pins, and Apple letter', caption: 'Apple Swift Student Challenge winner package · 2023',
      },
      {
        src: '/media/projects/asymmed-wwdc23.jpg', width: 900, height: 1200, alt: 'WWDC23 winner hoodie photographed after the Swift Student Challenge', caption: 'WWDC23 winner hoodie',
      },
    ],
  },
  {
    logo: '/logos/superteam-ctf-36.png',
    title: 'Superteam CTF',
    subtitle: 'crypto security competition · $10k+ prizes',
    description: 'Designed all 14 cryptography, smart-contract, reverse-engineering, and systems challenges for the first in-person competition at Microsoft Bengaluru, then returned as an organizer for the second edition.',
    links: [
      { label: 'play ctf', href: 'https://superteamctf.vercel.app' },
      { label: 'event recap', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7487727447392829440/' },
    ],
    media: [{
      src: '/media/projects/superteam-ctf-v2.jpg',
      width: 1200,
      height: 630,
      alt: 'Official Superteam CTF v2 event artwork',
      caption: 'Superteam CTF v2 · 76 attendees · Localhost Bengaluru',
    }, {
      src: '/media/projects/superteam-ctf-live.mp4',
      type: 'video',
      poster: '/media/projects/superteam-ctf-live-poster.jpg',
      captions: '/captions/superteam-ctf-live.vtt',
      alt: 'Participants solving challenges at the first Superteam CTF',
      caption: 'Live competition floor · first Superteam CTF · 5 sec',
      href: 'https://x.com/aabisbuilds/status/1948962210811687093',
    }],
  },
  {
    logo: '/logos/catwatch.png',
    title: 'CatWatch',
    subtitle: 'drone inspection toolkit · hackathon project',
    description: 'Built a Python toolkit for drone and camera-based industrial inspection at HackIllinois, combining real-time vision models with damaged-part detection and a 3D defect viewer.',
    links: [{ label: 'source code', href: 'https://github.com/GitBolt/catwatch' }],
  },
  {
    logo: '/logos/mbc.png',
    title: 'Flume + OptionsFi',
    subtitle: 'finance tools · 2 hackathon prizes · $5k total',
    description: 'Built Flume, a visual interface for composing DeFi actions, and helped ship OptionsFi during the same overnight sprint. The two projects placed fourth and second at Midwest Blockchain Conference 2025.',
    links: [
      { label: 'flume source code', href: 'https://github.com/GitBolt/flume' },
      { label: 'mbc project gallery', href: 'https://mbc.devpost.com/project-gallery?page=3' },
    ],
  },
  {
    logo: '/logos/discord.png',
    title: 'Disbet',
    subtitle: 'discord sports betting · $3k prize · built in 4 hours',
    description: 'Built a Discord-native sports-betting experience on Monaco Protocol in four hours. Won the Sandstorm UX track, a $3,000 prize, and two Breakpoint tickets.',
    links: [
      { label: 'my launch thread', href: 'https://x.com/aabisbuilds/status/1621828714152730624' },
      { label: 'PR Newswire release', href: 'https://www.prnewswire.com/news-releases/betdex-announces-disbet-as-winner-of-solana-hackathon-sports-betting-ux-track-301740713.html' },
      { label: 'source code', href: 'https://github.com/GitBolt/disbet' },
    ],
  },
  {
    logo: '/logos/solathon.svg',
    title: 'Solathon',
    subtitle: 'python blockchain toolkit · 150k+ downloads',
    description: 'Built and maintained an open-source Python SDK for Solana RPCs and transactions. 150,000+ downloads and a $3,000 development grant.',
    links: [
      { label: 'documentation', href: 'https://solathon.vercel.app' },
      { label: 'source + history', href: 'https://github.com/GitBolt/solathon' },
      { label: 'pypi', href: 'https://pypi.org/project/solathon/' },
    ],
    media: [{
      src: '/media/projects/solathon-docs.jpg', width: 1600, height: 841, alt: 'Solathon documentation and Python SDK branding', caption: 'Solathon Python SDK documentation',
    }],
  },
  {
    logo: '/logos/salt-36.png',
    title: 'Salt Analysis',
    subtitle: 'chemistry learning tool · ~100 daily unique users',
    description: 'Turned the qualitative salt-analysis flowchart into a guided interactive workflow for chemistry labs. ~100 daily unique users and 23,000+ page views across 102 countries.',
    links: [
      { label: 'open app', href: 'https://saltanalysis.com' },
      { label: 'source code', href: 'https://github.com/GitBolt/saltanalysis' },
    ],
    media: [{
      src: '/media/projects/salt-analysis.jpg', width: 1600, height: 840, alt: 'Salt Analysis interactive chemistry workflow', caption: 'Salt Analysis interactive workflow',
    }],
  },
  {
    logo: '/logos/soltrek.png',
    title: 'SOL Trek',
    subtitle: 'no-code blockchain learning playground',
    description: 'Built a block-based environment for learning how Solana programs and transactions fit together. Received a $6,000 Solana Foundation grant.',
    links: [
      { label: 'source code', href: 'https://github.com/GitBolt/soltrek' },
      { label: 'on-chain program', href: 'https://github.com/GitBolt/soltrek-program' },
      { label: 'accelerator acceptance', href: 'https://x.com/aabisbuilds/status/1654358846511501312' },
    ],
  },
];

const Index: NextPage = function Index() {
  const renderCards = (cards: CardData[], variant: 'work' | 'project') => (
    <div className={styles.chipGrid}>
      {cards.map((card) => <ExpandableCard key={card.title} card={card} variant={variant} />)}
    </div>
  );

  return (
    <div className={styles.index}>
      <PageHead
        canonicalPath="/"
        socialImage={{
          path: '/og-card.png',
          alt: 'Syed Aabis Akhtar — into space, software, and startups',
          width: 1200,
          height: 630,
        }}
      />
      <main className={styles.content}>
        <div className={styles.mainBox}>
          <h1>hi, i&apos;m aabis</h1>
          <p className={styles.tagline}>into space, software, and startups</p>
          <p className={styles.uiucLine}>
            aerospace @
            {' '}
            <a href="https://aerospace.illinois.edu" target="_blank" rel="noreferrer" className={styles.uiucLink}>
              <Image src="/logos/uiuc.png" width={14} height={14} sizes="14px" alt="" />
              <span>UIUC</span>
            </a>
          </p>
          <a
            className={styles.portfolioLink}
            href="/engineering-portfolio.pdf"
            target="_blank"
            rel="noreferrer"
          >
            engineering portfolio
            {' '}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <section className={styles.section} aria-labelledby="aerospace-heading">
          <h2 id="aerospace-heading" className={styles.sectionLabel}>aerospace</h2>
          {renderCards(aerospace, 'work')}
        </section>

        <section className={styles.section} aria-labelledby="work-heading">
          <h2 id="work-heading" className={styles.sectionLabel}>work</h2>
          {renderCards(experience, 'work')}
        </section>

        <section className={styles.section} aria-labelledby="projects-heading">
          <h2 id="projects-heading" className={styles.sectionLabel}>projects</h2>
          {renderCards(projects, 'project')}
        </section>

        <div className={styles.section}>
          <p className={styles.dmsText}>
            my DMs are always open on
            {' '}
            <a href="https://twitter.com/aabisbuilds" target="_blank" rel="noreferrer">X</a>
            {' · '}
            <a href="mailto:hi@aab.is">hi@aab.is</a>
          </p>
        </div>
      </main>
      <div className={styles.footerWrapper}><Footer /></div>
    </div>
  );
};

export default Index;
