import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizTutorial2.module.css'
import Link from 'next/link'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState } from 'react'

export default function QuizTutorialTwo() {

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
        <div className={styles.text}>
          <p className={styles.reg}>A question will appear and there will be multiple choices to choose from.</p>
          <p className={styles.reg}>Select the correct answer.</p>
          <h3 className={styles.headThree}>Choose the option that is a fruit.</h3>
        </div>
        <div className={styles.btn}>
        {buttText && buttText.map((binfo, bindex) => {
          return (
              <Link href="/quiztutorial3">
              <MPWTextButton
                key={bindex}
                buttonText={binfo.dog} />
                </Link>
          )
        })}
          {buttText && buttText.map((binfo, bindex) => {
          return (
              <Link href="/quiztutorial3">
              <MPWTextButton
                key={bindex}
                buttonText={binfo.apple} />
                </Link>
          )
        })}
          {buttText && buttText.map((binfo, bindex) => {
          return (
              <Link href="/quiztutorial3">
              <MPWTextButton
                key={bindex}
                buttonText={binfo.cat} />
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