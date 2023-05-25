import styles from './QuizNext.module.css'
import LPWTextButton from '../buttons/withText/lowpriorityWtext'
import { text } from '@/data/text/text'
import { useState } from 'react'

export default function QuizNext() {

  const [data, setData] = useState([...text.headers])
  const [buttText, setButText] = useState([...text.quiz])

    return(
        <>
      <div className={styles.button}>
      {buttText && buttText.map((binfo, bindex) => {
              return (
                <LPWTextButton
                  key={bindex}
                  buttonText={binfo.next} />
              )
            })}
      </div>        </>
    )
}