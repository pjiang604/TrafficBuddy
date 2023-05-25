import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'


export default function SubForm() {
  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <HeaderNav />
      </header>
      <main className={styles.main}>
        SUBMISSION FORM
        <Link href="/requests">Requests</Link>
      <Link href="/about">About</Link>
      <Link href="/settings">Settings</Link>
      <Link href="/messages">Messages</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/tips">Tips</Link>
      </main>
      <footer>
      <Nav />
      </footer>
    </>
  )
}
