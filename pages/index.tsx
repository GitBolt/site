import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Index.module.scss'
import {Footer} from '@/components/Footer';

export default function Home() {

  const rotate = () => {

  }
  return (
    <div className={styles.index}>
      <Head>
        <title>Syed Aabis Akhtar</title>
        <meta name="description" content="Cool favicon right?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.gradiant}></div>
        <h1 className="text-white">Nothing here yet...</h1>
        <h2 className="text-white">How about you click the button below till then for absolutely no reason?</h2>
        <button onClick={rotate}>A totally random button</button>
      </main>
      <Footer />
    </div>
  )
}
