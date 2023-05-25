import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Login.module.css'
import LoginInputs from '../components/LoginInputs'


export default function Login() {

  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <LoginInputs />
      </main>
    </>
  )
}
