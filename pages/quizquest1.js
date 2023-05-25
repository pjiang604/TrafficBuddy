import Head from 'next/head'
import styles from '@/styles/Quiz.module.css'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import QuizCard from '@/components/QuizCard'
import { text } from '@/data/text/text'
import { useState } from 'react'
import QuizButton from '@/components/buttons/QuizButtons'
import QuizFeedback from '@/components/QuizFeedback'
import QuizNext from '@/components/QuizNext'
import { useRouter } from 'next/router'
import LPWTextButton from '@/components/buttons/withText/lowpriorityWtext'

export default function QuizQuestOne() {

  const [data, setData] = useState([...text.quiz])
  const [data2, setData2] = useState([...text.headers])

  const [count, setCount] = useState(1)
  const [feedback, setFeedback] = useState()
  const [score, setScore] = useState(0)

  const router = useRouter()

  const feedbackIncrement = (fbIncrement) => {
    if (fbIncrement == "add") {
      setCount(count + 0.5)
    } else if (fbIncrement == "next") {
      setCount(count + 0.5)
    }
  }

  const feedbackType = (fbType) => {
    if (fbType == "correct") {
      setFeedback("correct")
    } else if (fbType == "incorrect")
      setFeedback("incorrect")

  }

  const addScore = (addScore) => {
    if (addScore == "correct") {
      setScore(score + 1)
    } else if (addScore == "incorrect") {
      setScore(score + 0)
    }
  }

  const Results = () => {
    console.log(score)
    console.log(count)

    if (count == 5.5) {
      router.push({
        pathname: './quizresults',
        query: {
          finalScore: score
        }
      })
    }
  }


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

        {/*QUESTION 1 - Question*/}
        {data && data.map((info, index) => {
          if (count == 1)
            return (
              <>
                <QuizCard
                  key={index}
                  question={info.q1}
                  questionNum={count} />
                <div className={styles.optionContainer}>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q1a}
                    /></a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q1b} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q1c} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("correct") + addScore("correct")}>
                    <QuizButton
                      key={index}
                      option={info.QAll} />
                  </a>
                </div>
              </>
            )
        })}
        {/*QUESTION 1 - Feedback*/}
        {data && data.map((info, index) => {
          if (count == 1.5 && feedback == "incorrect") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.incorrect}
                  question={info.q1}
                  correctHeader={info.correctHeader}
                  answer={info.QAll}
                  image={info.incorrectImg} />
                <a onClick={() => feedbackIncrement("next")} ><QuizNext /></a>
              </>
            )
          } else if (count == 1.5 && feedback == "correct") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.correct}
                  question={info.q1}
                  answer={info.QAll}
                  image={info.correctImg} />
                <a onClick={() => feedbackIncrement("next")} ><QuizNext /></a>
              </>
            )
          }
        })}

        {/*QUESTION 2 - Question*/}
        {data && data.map((info, index) => {
          if (count == 2)
            return (
              <>
                <QuizCard
                  key={index}
                  question={info.q2}
                  questionNum={count} />
                <div className={styles.optionContainer}>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("correct") + addScore("correct")}>
                    <QuizButton
                      key={index}
                      option={info.Q2a}
                    /></a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q2b} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q2c} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q2d} />
                  </a>
                </div>
              </>
            )
        })}
        {/*QUESTION 2 - Feedback*/}
        {data && data.map((info, index) => {
          if (count == 2.5 && feedback == "incorrect") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.incorrect}
                  question={info.q2}
                  correctHeader={info.correctHeader}
                  answer={info.Q2a}
                  image={info.incorrectImg} />
                <a onClick={() => feedbackIncrement("next")} ><QuizNext /></a>
              </>
            )
          } else if (count == 2.5 && feedback == "correct") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.correct}
                  question={info.q2}
                  answer={info.Q2a}
                  image={info.correctImg} />
                <a onClick={() => feedbackIncrement("next")} ><QuizNext /></a>
              </>
            )
          }
        })}

        {/*QUESTION 3 - Question*/}
        {data && data.map((info, index) => {
          if (count == 3)
            return (
              <>
                <QuizCard
                  key={index}
                  question={info.q3}
                  questionNum={count} />
                <div className={styles.optionContainer}>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q3a}
                    /></a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q3b} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q3c} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("correct") + addScore("correct")}>
                    <QuizButton
                      key={index}
                      option={info.QAll} />
                  </a>
                </div>
              </>
            )
        })}
        {/*QUESTION 3 - Feedback*/}
        {data && data.map((info, index) => {
          if (count == 3.5 && feedback == "incorrect") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.incorrect}
                  question={info.q3}
                  correctHeader={info.correctHeader}
                  answer={info.QAll}
                  image={info.incorrectImg} />
                <a onClick={() => feedbackIncrement("next")} ><QuizNext /></a>
              </>
            )
          } else if (count == 3.5 && feedback == "correct") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.correct}
                  question={info.q3}
                  answer={info.QAll}
                  image={info.correctImg} />
                <a onClick={() => feedbackIncrement("next")} ><QuizNext /></a>
              </>
            )
          }
        })}

        {/*QUESTION 4 - Question*/}
        {data && data.map((info, index) => {
          if (count == 4)
            return (
              <>
                <QuizCard
                  key={index}
                  question={info.q4}
                  questionNum={count} />
                <div className={styles.optionContainer}>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q4a}
                    /></a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q4b} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q4c} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("correct") + addScore("correct")}>
                    <QuizButton
                      key={index}
                      option={info.QAll} />
                  </a>
                </div>
              </>
            )
        })}
        {/*QUESTION 4 - Feedback*/}
        {data && data.map((info, index) => {
          if (count == 4.5 && feedback == "incorrect") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.incorrect}
                  question={info.q4}
                  correctHeader={info.correctHeader}
                  answer={info.QAll}
                  image={info.incorrectImg} />
                <a onClick={() => feedbackIncrement("next")} ><QuizNext /></a>
              </>
            )
          } else if (count == 4.5 && feedback == "correct") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.correct}
                  question={info.q4}
                  answer={info.QAll}
                  image={info.correctImg} />
                <a onClick={() => feedbackIncrement("next")} ><QuizNext /></a>
              </>
            )
          }
        })}

        {/*QUESTION 5 - Question*/}
        {data && data.map((info, index) => {
          if (count == 5)
            return (
              <>
                <QuizCard
                  key={index}
                  question={info.q5}
                  questionNum={count} />
                <div className={styles.optionContainer}>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("correct") + addScore("correct")}>
                    <QuizButton
                      key={index}
                      option={info.Q5a}
                    /></a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q5b} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q5c} />
                  </a>
                  <a onClick={() => feedbackIncrement("add") + feedbackType("incorrect")}>
                    <QuizButton
                      key={index}
                      option={info.Q5d} />
                  </a>
                </div>
              </>
            )
        })}
        {/*QUESTION 5 - Feedback*/}
        {data && data.map((info, index) => {
          if (count == 5.5 && feedback == "incorrect") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.incorrect}
                  question={info.q5}
                  correctHeader={info.correctHeader}
                  answer={info.Q5a}
                  image={info.incorrectImg} />
                <a onClick={() => Results()} >
                  <LPWTextButton
                    key={index}
                    buttonText={info.finish} />
                </a>
              </>
            )
          } else if (count == 5.5 && feedback == "correct") {
            return (
              <>
                <QuizFeedback
                  key={index}
                  feedback={info.correct}
                  question={info.q5}
                  answer={info.Q5a}
                  image={info.correctImg} />
                <a onClick={() => Results()} >
                  <LPWTextButton
                    key={index}
                    buttonText={info.finish} />
                </a>
              </>
            )
          }
        })}



      </main>
      <footer>
        <Nav />
      </footer>
    </>
  )
}