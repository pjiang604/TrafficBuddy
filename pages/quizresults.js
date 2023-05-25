import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Quiz.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { useSearchParams } from 'next/navigation'
import { text } from '@/data/text/text'

import { useState } from 'react'

export default function QuizResults() {

  const [data, setData] = useState([...text.quiz])
  const [data2, setData2] = useState([...text.headers])

  const searchParams = useSearchParams();
  const finalScore = searchParams.get('finalScore')
  const percentage = (finalScore / 5) * 100

  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {data2 && data2.map((info2, index2) => {
          return (
            <HeaderNav
              key={index2}
              headers={info2.quizResults} />
          )

        })}
      </header>
      <main className={styles.main}>

        <Image src="/logos/logo.png" height={109} width={131} />
        <div class={styles.resultContainer}>
          <h1>Your Final Score:</h1>
          <h1 className={styles.largeScore}>{percentage}%</h1>
          <h3>{finalScore} out 5 Questions Correct</h3>
        </div>

        {data && data.map((info, index) => {
          return (
            <>
              <Link href="./tips">
                <HPWTextButton
                  key={index}
                  buttonText={info.article} />
              </Link>
              <div className={styles.medButtons}>
                <Link href="./quizmain">
                  <MPWTextButton
                    key={index}
                    buttonText={info.tryAgain} />
                </Link>
                <Link href="./quizresultsall">
                  <MPWTextButton
                    key={index}
                    buttonText={info.seeResults} />
                </Link>
              </div>
            </>
          )

        })}

      </main>
      <footer>
        <Nav />
      </footer>
    </>
  )
}