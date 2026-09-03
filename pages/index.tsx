/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/Index.module.scss';
import { Footer } from '@/components/Footer';
import { CardData, ExpandableCard } from '@/components/ExpandableCard';
import type { NextPage } from 'next';
import { PageHead } from '@/components/Head';

const aerospace: CardData[] = [
  {
    logo: '/logos/lri.png',
    title: 'engine fluids + admin director',
    subtitle: 'student liquid rocket team @ uiuc',
    description: 'Built and tested feed-system hardware for Overture Mk1, our student-developed liquid bipropellant rocket engine, including tube fabrication, plumbing, water-flow, cold-flow, and hotfire operations. I also rebuilt the team website and later served as Administrative Director.',
    links: [
      { label: 'team website', href: 'https://www.liquidrocket.org' },
      { label: 'may 2026 hotfire', href: 'https://www.linkedin.com/posts/liquid-rocket-illinois_on-sunday-may-3rd-lri-had-our-first-hotfire-activity-7460779425371037697-9cob' },
    ],
    media: [
      {
        src: '/media/lri/overture-hotfire.mp4',
        type: 'video',
        poster: '/media/lri/overture-hotfire-poster.jpg',
        alt: 'Overture Mk1 firing during its first hotfire',
        caption: 'Overture Mk1 · first hotfire · May 3, 2026 · 17 sec',
      },
      {
        src: '/media/lri/overture-cold-flow.mp4',
        type: 'video',
        poster: '/media/lri/overture-cold-flow-poster.jpg',
        alt: 'Overture Mk1 feed system during a cold-flow test',
        caption: 'Overture Mk1 · cold-flow test · Apr. 14, 2026 · 15 sec',
      },
      {
        src: '/media/lri/overture-hotfire.jpg',
        alt: 'Overture Mk1 firing on the test stand',
        caption: 'Overture Mk1 · first hotfire · May 3, 2026',
        href: 'https://www.linkedin.com/company/liquid-rocket-illinois',
      },
      { src: '/media/lri/overture-engine.jpg', alt: 'Overture Mk1 liquid rocket engine', caption: 'Overture Mk1 engine hardware' },
    ],
  },
  {
    logo: '/logos/quadcopter.jpg',
    title: 'carbon-fiber quadcopter',
    subtitle: 'personal hardware build · 2026',
    description: 'Designed and built a roughly 2 kg carbon-fiber quadcopter, integrating the airframe, propulsion, power, radio, and flight-control systems before iterating through bench and outdoor flight tests.',
    links: [{ label: 'build photo', href: '/media/drone/carbon-fiber-airframe.jpg' }],
    media: [
      {
        src: '/media/drone/carbon-fiber-airframe.jpg',
        alt: 'Aabis beside the carbon-fiber quadcopter on a workbench',
        caption: 'Completed airframe on the workbench · Feb. 26, 2026',
        position: 'center 58%',
      },
      { src: '/media/drone/outdoor-test-frame.jpg', alt: 'Carbon-fiber quadcopter during an outdoor test', caption: 'Outdoor flight-test footage frame · Feb. 27, 2026' },
    ],
  },
  {
    logo: '/logos/anduril.png',
    title: 'anduril drone racing',
    subtitle: 'gps-denied autonomous drone race · spring 2026',
    description: 'Built a GPS-denied vision and control stack for Anduril’s autonomous drone-racing competition using OpenCV, IMU guidance, and a racing-line controller. Advanced past Round 1 with no crashes in the evaluated runs.',
    links: [{ label: 'ai grand prix', href: 'https://www.anduril.com/news/anduril-launches-the-ai-grand-prix-a-global-autonomous-drone-race' }],
  },
  {
    logo: '/logos/nmcad.png',
    title: 'research intern',
    subtitle: 'aerospace materials research @ iisc',
    description: 'Developed a k-nearest-neighbor analyzer for syntactic foam, a lightweight composite used in aerospace and marine structures, and rebuilt the laboratory website during a research internship at the Indian Institute of Science.',
    links: [{ label: 'website I rebuilt', href: 'https://aero.iisc.ac.in/people/dinesh/web/index.php' }],
  },
];

const experience: CardData[] = [
  {
    logo: '/logos/spacexai.png',
    title: 'campus lead',
    subtitle: 'ai developer community @ spacexai · uiuc',
    description: 'Representing UIUC in SpaceXAI’s campus program through developer workshops, hackathons, build nights, and student collaborations.',
    links: [{ label: 'role announcement', href: 'https://x.com/0xBolt/status/2091614481860231402' }],
  },
  {
    logo: '/logos/spicenet.jpg',
    title: 'founding protocol engineer',
    subtitle: 'cross-chain defi infrastructure @ spicenet',
    description: 'Built Rust trading vaults, rollup infrastructure, and the TypeScript and React SpiceFlow SDK. The SDK powered Brokex and Elitra devnets for 29,000 users—77% and 81% said the experience felt fully native—and later the Reppo private mainnet beta, with 10+ app integrations spanning 9 testnets.',
    links: [
      { label: 'spicenet', href: 'https://spicenet.io' },
      { label: 'spiceflow package', href: 'https://www.npmjs.com/package/@spicenet-io/spiceflow-ui' },
      { label: '29k-user devnets', href: 'https://spicenet.io/blogs/spicenet-roadmap' },
      { label: 'reppo mainnet beta', href: 'https://portal.spicenet.io/campaigns' },
    ],
    media: [{ src: '/photos/spiceflow.png', alt: 'The real SpiceFlow funding interface', caption: 'SpiceFlow product interface' }],
  },
  {
    logo: '/logos/stellarsol.jpg',
    title: 'founder',
    subtitle: 'solana payments startup · 2nd of 750',
    description: 'Co-founded a Solana payments product and led its engineering through the Summer Camp hackathon, placing second in the Payments track among 750 submissions. StellarSOL later received a Solana Foundation grant and was featured by The Information.',
    links: [
      { label: 'stellarsol on x', href: 'https://x.com/stellarsolapp' },
      { label: 'summer camp results', href: 'https://solana.com/news/solana-summer-camp-winners' },
      { label: 'product demo', href: 'https://x.com/0xBolt/status/1547898009484402689' },
      { label: 'launch thread', href: 'https://x.com/StellarSolApp/status/1544300773533962240' },
      { label: 'the information', href: 'https://www.theinformation.com/articles/here-come-the-zoomers-silicon-valley-greets-a-new-generation-of-teen-founders' },
    ],
    media: [
      {
        src: '/media/work/the-information-profile.jpg',
        alt: 'The Crypto Prodigies section of The Information featuring a portrait of Aabis at age 16',
        caption: 'The Information · “The Crypto Prodigies” · Mar. 2023',
      },
      {
        src: '/media/work/the-information-excerpt.jpg',
        alt: 'The Information excerpt describing Aabis and StellarSOL',
        caption: 'Article excerpt naming Aabis and StellarSOL · readable here without the paywall',
      },
      {
        src: '/media/work/stellarsol-launch.jpg',
        alt: 'Original StellarSOL artwork showing purchases from Flipkart and Amazon with Solana',
        caption: 'Original StellarSOL launch artwork · Jul. 2022',
        href: 'https://x.com/StellarSolApp/status/1544300773533962240',
      },
      {
        src: '/media/work/stellarsol-demo.mp4',
        type: 'video',
        poster: '/media/work/stellarsol-demo-poster.jpg',
        alt: 'StellarSOL browser extension purchasing an item from Flipkart with USDC',
        caption: 'Buying from Flipkart with USDC through StellarSOL · product demo',
        href: 'https://x.com/0xBolt/status/1547898009484402689',
      },
    ],
  },
  {
    logo: '/logos/superteam_earn.png',
    title: 'founding team',
    subtitle: 'crypto jobs + bounties marketplace @ superteam earn',
    description: 'Helped build the original frontend for Superteam’s bounties, grants, and jobs platform. The early product reached roughly 1,500 weekly viewers while listing millions of dollars in opportunities.',
    links: [
      { label: 'superteam earn', href: 'https://earn.superteam.fun' },
      { label: 'product hunt', href: 'https://www.producthunt.com/products/superteam-earn' },
    ],
    media: [{
      src: '/media/work/superteam-earn-product-hunt.jpg',
      alt: 'Superteam Earn interface on its Product Hunt launch page',
      caption: 'Original Superteam Earn launch gallery image · Product Hunt',
      href: 'https://www.producthunt.com/products/superteam-earn',
    }],
  },
  {
    logo: '/logos/summer.svg',
    title: 'mentor + organizer',
    subtitle: '8-week solana builder program · 42 of 583 selected',
    description: 'Organized and mentored an eight-week program for 42 builders selected from 583 applicants across 15 countries, helping run the curriculum, technical sessions, and project support.',
    links: [{ label: 'fellowship archive', href: 'https://summer.superteam.fun' }],
  },
  {
    logo: '/logos/solana.png',
    title: 'devrel intern',
    subtitle: 'developer education @ solana foundation · 4 workshops',
    description: 'Designed and delivered four hands-on developer workshops across four universities, drawing 1,000 registrations and helping participants mint more than 300 NFTs. The curriculum included a first Solana program, a bank simulator, and a poll application.',
    links: [
      { label: 'workshop metrics', href: 'https://x.com/0xBolt/status/1696191692330676230' },
      { label: 'bank workshop', href: 'https://github.com/GitBolt/solana-bank-workshop' },
      { label: 'poll workshop', href: 'https://github.com/GitBolt/solana-poll' },
    ],
    media: [{
      src: '/media/work/solana-workshop-metrics.jpg',
      alt: 'Metrics from four Solana university workshops',
      caption: '4 university workshops · 1,000 registrations · 300+ NFTs',
      href: 'https://x.com/0xBolt/status/1696191692330676230',
    }],
  },
];

const projects: CardData[] = [
  {
    logo: '/logos/pythia.jpg',
    title: 'pythia markets',
    subtitle: '$18k at cypherpunk 2025 · prediction-market infrastructure',
    description: 'Built the Solana program and led the Arcium confidential-computation integration for private prediction markets. Won the $10,000 University Prize and $8,000 Arcium track among 1,576 submissions.',
    links: [{ label: 'colosseum entry', href: 'https://arena.colosseum.org/projects/explore/pythia' }],
    media: [{ src: '/media/projects/pythia-markets.jpg', alt: 'Pythia Markets launch artwork supplied by the project team', caption: 'Original Pythia launch artwork · project email archive' }],
  },
  {
    logo: '/logos/swift.webp',
    title: 'asymmed',
    subtitle: 'encryption learning app · apple swift winner 2023',
    description: 'Learned Swift and built an interactive app explaining asymmetric encryption through a blockchain transaction in four days, winning Apple’s 2023 Swift Student Challenge.',
    links: [
      { label: 'winner profile', href: 'https://www.wwdcscholars.com/s/19C9A545-D5DF-451B-963D-382EC0AFE370/2023' },
      { label: 'source code', href: 'https://github.com/GitBolt/AsymmED' },
    ],
    media: [
      { src: '/media/projects/asymmed-app.jpg', alt: 'AsymmED Swift Playground app screen', caption: 'Actual Swift Playground thumbnail · source repository' },
      { src: '/media/projects/asymmed-award.jpg', alt: 'The WWDC23 Swift Student Challenge award, AirPods Pro, pins, and Apple letter', caption: 'WWDC23 winner package · personal photo archive' },
      { src: '/media/projects/asymmed-wwdc23.jpg', alt: 'WWDC23 winner hoodie photographed after the Swift Student Challenge', caption: 'WWDC23 winner hoodie · personal photo archive' },
    ],
  },
  {
    logo: '/logos/superteam_ctf.ico',
    title: 'superteam ctf',
    subtitle: 'crypto security competition · 14 challenges · 2 events',
    description: 'Designed all 14 cryptography, smart-contract, reverse-engineering, and systems challenges for the first in-person competition at Microsoft Bengaluru, then returned as an organizer for the second edition, attended by 76 people at Localhost HQ.',
    links: [
      { label: 'play ctf', href: 'https://ctf.superteam.fun' },
      { label: 'event recap', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7487727447392829440/' },
    ],
    media: [{
      src: '/media/projects/superteam-ctf-v2.jpg',
      alt: 'Official Superteam CTF v2 event artwork',
      caption: 'Superteam CTF v2 · 76 attendees · Localhost Bengaluru',
      href: 'https://ctf.superteam.fun',
    }, {
      src: '/media/projects/superteam-ctf-live.mp4',
      type: 'video',
      poster: '/media/projects/superteam-ctf-live-poster.jpg',
      alt: 'Participants solving challenges at the first Superteam CTF',
      caption: 'Live competition floor · first Superteam CTF · 5 sec',
      href: 'https://x.com/0xBolt/status/1948962210811687093',
    }],
  },
  {
    logo: '/logos/catwatch.png',
    title: 'catwatch',
    subtitle: 'hackillinois 2026 · drone inspection toolkit',
    description: 'Built a Python toolkit for drone and camera-based industrial inspection at HackIllinois, combining real-time vision models with damaged-part detection and a 3D defect viewer.',
    links: [{ label: 'source code', href: 'https://github.com/GitBolt/catwatch' }],
    media: [{ src: '/media/drone/outdoor-test-frame.jpg', alt: 'The team testing its inspection drone outdoors', caption: 'Drone testing before HackIllinois judging · Feb. 27, 2026' }],
  },
  {
    logo: '/logos/mbc.png',
    title: 'flume + optionsfi',
    subtitle: 'defi builder tools · 2 prizes at mbc ’25 · $5k total',
    description: 'Built Flume, a visual interface for composing DeFi actions, and helped ship OptionsFi during the same overnight sprint. The two projects placed fourth and second at MBC 2025.',
    links: [
      { label: 'flume source code', href: 'https://github.com/GitBolt/flume' },
      { label: 'mbc project gallery', href: 'https://mbc.devpost.com/project-gallery?page=3' },
    ],
    media: [{
      src: '/media/projects/mbc-build.jpg',
      alt: 'Aabis building at the Midwest Blockchain Conference with the OptionsFi code open',
      caption: 'Overnight build at Michigan Ross · Dec. 2025 · personal photo archive',
      position: 'center 35%',
    }],
  },
  {
    logo: '/logos/discord.png',
    title: 'disbet',
    subtitle: 'discord sports-betting app · $3k winner · built in 4 hours',
    description: 'Built a Discord-native sports-betting experience on Monaco Protocol in four hours. Won the Sandstorm UX track, a $3,000 prize, and two Breakpoint tickets.',
    links: [
      { label: 'my launch thread', href: 'https://x.com/0xBolt/status/1621828714152730624' },
      { label: 'PR Newswire release', href: 'https://www.prnewswire.com/news-releases/betdex-announces-disbet-as-winner-of-solana-hackathon-sports-betting-ux-track-301740713.html' },
      { label: 'source code', href: 'https://github.com/GitBolt/disbet' },
    ],
  },
  {
    logo: '/logos/solathon.svg',
    title: 'solathon',
    subtitle: '150k+ downloads · python sdk for solana',
    description: 'Built and maintained an open-source Python SDK for Solana RPCs and transactions, growing it to more than 150,000 downloads and receiving a $3,000 development grant.',
    links: [
      { label: 'documentation', href: 'https://solathon.vercel.app' },
      { label: 'source + history', href: 'https://github.com/GitBolt/solathon' },
      { label: 'pypi', href: 'https://pypi.org/project/solathon/' },
    ],
    media: [{ src: '/media/projects/solathon-docs.jpg', alt: 'Solathon documentation and Python SDK branding', caption: 'Solathon documentation · source repository asset' }],
  },
  {
    logo: '/logos/salt.ico',
    title: 'salt analysis',
    subtitle: 'interactive chemistry workflow · used in 50 countries',
    description: 'Turned the qualitative salt-analysis flowchart into a guided interactive workflow for chemistry labs, reaching 2,400 users and 9,000 page views across 50 countries.',
    links: [
      { label: 'open app', href: 'https://saltanalysis.com' },
      { label: 'source code', href: 'https://github.com/GitBolt/saltanalysis' },
    ],
    media: [{ src: '/media/projects/salt-analysis.jpg', alt: 'Salt Analysis interactive chemistry workflow', caption: 'Live product interface · source repository asset' }],
  },
  {
    logo: '/logos/soltrek.png',
    title: 'sol trek',
    subtitle: 'no-code solana learning playground',
    description: 'Built a block-based environment for learning how Solana programs and transactions fit together. Received a $6,000 Solana Foundation grant.',
    links: [
      { label: 'source code', href: 'https://github.com/GitBolt/soltrek' },
      { label: 'on-chain program', href: 'https://github.com/GitBolt/soltrek-program' },
      { label: 'accelerator acceptance', href: 'https://x.com/0xBolt/status/1654358846511501312' },
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
      <PageHead />
      <div className={styles.content}>
        <div className={styles.mainBox}>
          <h1>hi, i&apos;m aabis</h1>
          <p className={styles.tagline}>into space, software, and startups</p>
          <p className={styles.uiucLine}>
            aerospace @
            {' '}
            <a href="https://aerospace.illinois.edu" target="_blank" rel="noreferrer" className={styles.uiucLink}>
              <img src="/logos/uiuc.png" alt="uiuc" />
              <span>UIUC</span>
            </a>
          </p>
        </div>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>aerospace</div>
          {renderCards(aerospace, 'work')}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>work</div>
          {renderCards(experience, 'work')}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>projects</div>
          {renderCards(projects, 'project')}
        </section>

        <div className={styles.section}>
          <p className={styles.dmsText}>
            my DMs are always open on
            {' '}
            <a href="https://twitter.com/0xBolt" target="_blank" rel="noreferrer">X</a>
            {' · '}
            <a href="mailto:hi@aab.is">hi@aab.is</a>
          </p>
        </div>
      </div>
      <div className={styles.footerWrapper}><Footer /></div>
    </div>
  );
};

export default Index;
