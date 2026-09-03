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
    subtitle: '@ liquid rocketry at illinois',
    description: 'Built and tested feed-system hardware for Overture Mk1, including tube fabrication, plumbing, water-flow, cold-flow, and hotfire operations. I also rebuilt the team website and later served as Administrative Director.',
    links: [
      { label: 'team website', href: 'https://www.liquidrocket.org' },
      { label: 'may 2026 hotfire', href: 'https://www.linkedin.com/posts/liquid-rocket-illinois_on-sunday-may-3rd-lri-had-our-first-hotfire-activity-7460779425371037697-9cob' },
      { label: 'cold-flow interview', href: 'https://www.linkedin.com/posts/liquid-rocket-illinois_james-vranas-our-engine-lead-breaks-down-activity-7450625893338898432-7qsi' },
      { label: 'test-stand software', href: 'https://github.com/liquid-rocketry-illinois/test-stand-sw' },
    ],
    media: [
      {
        src: '/media/lri/overture-hotfire.jpg',
        alt: 'Overture Mk1 firing on the test stand',
        caption: 'Overture Mk1 · first hotfire · May 3, 2026',
        href: 'https://www.linkedin.com/company/liquid-rocket-illinois',
      },
      { src: '/media/lri/rand-e-feed-system.jpg', alt: 'RAND-E engine and feed system on the test stand', caption: 'RAND-E feed system and integrated gas panel' },
      {
        src: '/media/lri/test-fire.mp4',
        type: 'video',
        alt: 'Liquid rocket engine test-fire video',
        caption: 'Test campaign footage · LRI archive',
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
    subtitle: 'autonomous racing · spring 2026',
    description: 'Built a GPS-denied vision and control stack for Anduril’s autonomous drone-racing competition using OpenCV, IMU guidance, and a racing-line controller. Advanced past Round 1 with no crashes in the evaluated runs.',
    links: [{ label: 'ai grand prix', href: 'https://www.anduril.com/news/anduril-launches-the-ai-grand-prix-a-global-autonomous-drone-race' }],
  },
  {
    logo: '/logos/nmcad.png',
    title: 'research intern',
    subtitle: '@ nmcad lab · iisc',
    description: 'Developed a k-nearest-neighbor analyzer for syntactic-foam research and rebuilt the laboratory website during a research internship at the Indian Institute of Science.',
    links: [
      { label: 'nmcad lab', href: 'https://aero.iisc.ac.in/people/dinesh/web/index.php' },
      { label: 'iisc aerospace', href: 'https://aero.iisc.ac.in' },
    ],
  },
];

const experience: CardData[] = [
  {
    logo: '/logos/spacexai.png',
    title: 'campus lead',
    subtitle: '@ spacexai · uiuc',
    description: 'Representing UIUC in SpaceXAI’s campus program through developer workshops, hackathons, build nights, and student collaborations.',
    links: [
      { label: 'my announcement', href: 'https://www.linkedin.com/posts/0xbolt_ill-be-representing-university-of-illinois-activity-7486972381840826368-Qo1w' },
      { label: 'post on x', href: 'https://x.com/0xBolt/status/2091614481860231402' },
      { label: 'official brand page', href: 'https://x.ai/legal/brand-guidelines' },
    ],
  },
  {
    logo: '/logos/spicenet.jpg',
    title: 'founding protocol engineer',
    subtitle: '@ spicenet',
    description: 'Built protocol and product infrastructure across Rust trading vaults, the Spicenet rollup, and the SpiceFlow TypeScript and React SDK used inside partner applications.',
    links: [
      { label: 'spicenet', href: 'https://spicenet.io' },
      { label: 'spiceflow package', href: 'https://www.npmjs.com/package/@spicenet-io/spiceflow-ui' },
      { label: 'public beta release', href: 'https://x.com/spicenetio/status/2089352984597762197' },
    ],
    media: [{ src: '/photos/spiceflow.png', alt: 'The real SpiceFlow funding interface', caption: 'SpiceFlow product interface' }],
  },
  {
    logo: '/logos/stellarsol.jpg',
    title: 'founder',
    subtitle: '@ stellarsol',
    description: 'Co-founded a Solana payments product and led its engineering through the Summer Camp hackathon, placing second in the Payments track among 750 submissions. StellarSOL later received a Solana Foundation grant and was featured by The Information.',
    links: [
      { label: 'stellarsol on x', href: 'https://x.com/stellarsolapp' },
      { label: 'summer camp results', href: 'https://solana.com/news/solana-summer-camp-winners' },
      { label: 'the information', href: 'https://www.theinformation.com/articles/here-come-the-zoomers-silicon-valley-greets-a-new-generation-of-teen-founders' },
    ],
    media: [
      {
        src: '/media/work/the-information-profile.jpg',
        alt: 'The Crypto Prodigies section of The Information featuring a portrait of Aabis at age 16',
        caption: 'The Information · “The Crypto Prodigies” · Mar. 2023',
        href: 'https://www.theinformation.com/articles/here-come-the-zoomers-silicon-valley-greets-a-new-generation-of-teen-founders',
      },
      {
        src: '/media/work/the-information-excerpt.jpg',
        alt: 'The Information excerpt describing Aabis and StellarSOL',
        caption: 'Article excerpt naming Aabis and StellarSOL · personal PDF archive',
        href: 'https://www.theinformation.com/articles/here-come-the-zoomers-silicon-valley-greets-a-new-generation-of-teen-founders',
      },
    ],
  },
  {
    logo: '/logos/superteam_earn.png',
    title: 'founding team',
    subtitle: '@ superteam earn',
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
    subtitle: '@ solana summer fellowship',
    description: 'Organized and mentored an eight-week program for 42 builders selected from 583 applicants across 15 countries, helping run the curriculum, technical sessions, and project support.',
    links: [{ label: 'fellowship archive', href: 'https://summer.superteam.fun' }],
  },
  {
    logo: '/logos/solana.png',
    title: 'devrel intern',
    subtitle: '@ solana foundation',
    description: 'Designed and delivered four hands-on developer workshops, including a first Solana program and poll application for new builders.',
    links: [
      { label: 'solana foundation', href: 'https://solana.org' },
      { label: 'developer repositories', href: 'https://github.com/solana-developers' },
    ],
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
    subtitle: 'apple swift student challenge winner · 2023',
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
    subtitle: 'two security events · challenge designer + organizer',
    description: 'Designed the crypto, smart-contract, reverse-engineering, and systems challenges for two in-person Superteam CTFs, including the first Microsoft-hosted event in Bengaluru.',
    links: [
      { label: 'play ctf', href: 'https://ctf.superteam.fun' },
      { label: 'event recap', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7487727447392829440/' },
    ],
    media: [{ src: '/media/projects/superteam-ctf-presenting.jpg', alt: 'Aabis presenting at the Microsoft-hosted Superteam CTF', caption: 'Presenting the CTF at Microsoft Bengaluru' }],
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
    subtitle: 'two prizes at mbc ’25 · $5k total',
    description: 'Built Flume, a visual interface for composing DeFi actions, and helped ship OptionsFi during the same overnight sprint. The two projects placed fourth and second at MBC 2025.',
    links: [{ label: 'mbc project gallery', href: 'https://mbc.devpost.com/project-gallery' }],
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
    subtitle: 'sandstorm hackathon winner · built in 4 hours',
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
