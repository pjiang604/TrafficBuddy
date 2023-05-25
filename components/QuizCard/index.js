import styles from './QuizCard.module.css'
import Image from 'next/image'
import HPWTextButton from '../buttons/withText/highpriorityWtext'

export default function QuizCard({

    question,
    questionNum

}) {
    return (
        <>
            <div className={styles.container}>
                <Image src="/quizImages/car.svg" height={185} width={250} />
                <p><b>Q{questionNum}: </b>{question}</p>
            </div>
        </>
    )
}