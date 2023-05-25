import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizTutorial.module.css'
import Link from 'next/link'
import LPWTextButton from '../components/buttons/withText/lowpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState } from 'react'


export default function QuizTutorial() {

  const [buttText, setButText] = useState([...text.quiz])
  const [data2, setData2] = useState([...text.headers])

  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      {data2 && data2.map((info, index) => {
          return (
            <HeaderNav
              key={index}
              headers={info.tutorial} />
          )
        })}
      </header>
      <main className={styles.main}>
        <div className={styles.navImg}>
        <img className={styles.img} src="/logos/logo.png"></img>
        <h1 className={styles.head}>Welcome to Traffic Buddy's Quiz!</h1>
        </div>
        <div className={styles.text}>
          <p className={styles.reg}>This quiz is designed to test your knowledge on a variety of supplies to keep in your car in case of emergencies.</p>
          <h4 className={styles.headFour}>This quick tutorial will show you how to navigate through the quiz.</h4>
        </div>
        <div className={styles.btn}>
        {buttText && buttText.map((binfo, bindex) => {
          return (
              <Link href="/quizmain">
              <LPWTextButton
                key={bindex}
                buttonText={binfo.skip} />
                </Link>
          )
        })}
          {buttText && buttText.map((binfo, bindex) => {
          return (
              <Link href="/quiztutorial2">
              <LPWTextButton
                key={bindex}
                buttonText={binfo.next} />
                </Link>
          )
        })}
        </div>

      </main>
      <footer>
        <Nav />
      </footer>
    </>
  )
}