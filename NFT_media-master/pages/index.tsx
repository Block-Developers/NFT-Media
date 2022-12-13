import Head from 'next/head'
import dynamic from "next/dynamic";
import { Suspense } from "react";
import styles from '../styles/Home.module.css'
// import Content from './Content'
import "@biconomy/web3-auth/dist/src/style.css"
import Hero from './Hero';


export default function Home() {
  const SocialLoginDynamic = dynamic(
    () => import("./Content").then((res) => res.default),
    {
      ssr: false,
    }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          
          <SocialLoginDynamic />
          
        </Suspense>
      </div>
      </main>
    </div>
  )
}
