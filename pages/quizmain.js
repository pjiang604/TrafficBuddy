import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState } from 'react'

export default function QuizMain() {

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
              headers={info.quizMain} />
          )
        })}
      </header>
      <main className={styles.main}>
        <div className={styles.header}>
          <h4><b>How well do you know your tips for: <br/>Safe Driving and Emergency Items?</b></h4>
          <h1 className={styles.head}>Test Your Knowledge!</h1>
        </div>
        <Image className={styles.img} src="/logos/logo.png" height={250} width={350}/>
        <div className={styles.btn}>
          {buttText && buttText.map((binfo, bindex) => {
            return (
              <Link href="/quizquest1">
                <HPWTextButton
                  key={bindex}
                  buttonText={binfo.start} />
              </Link>
            )
          })}
        </div>
        <div className={styles.btn}>
          {buttText && buttText.map((binfo, bindex) => {
            return (
              <Link href="/quiztutorial">
                <MPWTextButton
                  key={bindex}
                  buttonText={binfo.tutorial} />
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