import Head from 'next/head'
import styles from '@/styles/QuizTutorial3.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { useState } from 'react'
import { text } from '@/data/text/text'
import QuizBtnFlat from '@/components/buttons/QuizBtnFlat'

export default function QuizTutorialThree() {
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
        <img></img>
        <div className={styles.text}>
          <p>After you choose your selection, you will know if it the right answer right away!</p>
        </div>
        <div>
          <div className={styles.content}>
            <h3>This was correct!</h3>
            <div className={styles.btn}>
              {buttText && buttText.map((binfo, bindex) => {
                return (

                  <QuizBtnFlat
                    key={bindex}
                    answer={binfo.apple} />

                )
              })}
            </div>
          </div>

          <div className={styles.content}>
            <img src="/quizImages/rightAnswer.svg" height={120} width={120}></img>
            <h3>This was incorrect!</h3>
            <img src="/quizImages/wrongAnswer.svg" height={120} width={120}></img>
            <h3>The correct answer was:</h3>
            <div className={styles.btn}>
            {buttText && buttText.map((binfo, bindex) => {
                return (

                  <QuizBtnFlat
                    key={bindex}
                    answer={binfo.apple} />

                )
              })}
            </div>
          </div>
        </div>
        <div>
          <p>Now you're ready to play the quiz!</p>
          <div className={styles.finishBtn}>
            {buttText && buttText.map((binfo, bindex) => {
              return (
                <Link href="/quizmain">
                  <MPWTextButton
                    key={bindex}
                    buttonText={binfo.finish} />
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <footer>
        <Nav />
      </footer>
    </>
  )
}