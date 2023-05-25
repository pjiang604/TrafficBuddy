import styles from './QuizFeedback.module.css'
import Image from 'next/image'

export default function QuizFeedback({

    feedback,
    question,
    correctHeader,
    answer,
    image,

}) {
    return (
        <>
            <div className={styles.container}>
                <h1>{feedback}</h1>
                <h2>{question}</h2>
                <h3>{correctHeader}</h3>
                <div className={styles.buttonContainer}>
                    <p>{answer}</p>
                </div>
                <Image src={image} height={200} width={200} />
            </div>

        </>
    )
}