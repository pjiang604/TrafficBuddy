import styles from "./QuizResults.module.css"
import Link from "next/link"
import Image from "next/image"

export default function QuizResultsCard({

    quizTitle,
    score,

}) {
    return (
        <div className={styles.resultContainer}>
            <h3>{quizTitle}</h3>
            <div className={styles.text}>
                <h1>{score}</h1>
                <p><Link href="/quizmain" className={styles.linkContainer}>Try Again
                    <Image src="/layoutIcons/Rarrow.svg" width={20} height={20} className={styles.arrow} />
                </Link></p>
            </div>
        </div>
    )
}