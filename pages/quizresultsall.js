import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/QuizResults.module.css'
import Link from 'next/link'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { tips } from '@/data/tips/tips'
import { useState } from 'react'
import QuizResultsCard from '@/components/QuizResultsCard'
import { useSearchParams } from 'next/navigation'


export default function QuizResultsAll() {

  const [data, setData] = useState([...text.headers])
  const [buttText, setButText] = useState([...text.quiz])
  const [results, setResults] = useState([...tips.card])

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
        {data && data.map((info, index) => {
          return (
            <HeaderNav
              key={index}
              headers={info.quizResults} />
          )

        })}
      </header>
      <main className={styles.main}>
        <Image className={styles.img} src="/logos/logo.png" height={109} width={131} />
        {results && results.map((qinfo, qindex) => {
          if (qinfo.title == "5 Useful Emergency Items for Your Car"){
          return(
            <QuizResultsCard
            key={qindex}
            quizTitle={qinfo.title}
            score={percentage + "%"}/>
          ) } else if (qinfo.title == "What Foods Should be Kept in the Car"){
            return(
              <QuizResultsCard
              key={qindex}
              quizTitle={qinfo.title}
              score={"20%"}/>
            )
          }
        } 
        )}
        
        <div className={styles.btn}>
          {buttText && buttText.map((binfo, bindex) => {
            return (
              <Link href="/tips"><MPWTextButton
                key={bindex}
                buttonText={binfo.moreQuiz} /></Link>
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