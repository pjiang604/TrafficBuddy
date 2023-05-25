import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Signup.module.css'
import Link from 'next/link'
import InputBoxes from '../components/InputBoxes'
import Nav from '@/components/nav'



export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <InputBoxes />
      </main>
    </>
  )
}
