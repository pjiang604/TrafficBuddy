import styles from "./QuizBtnFlat.module.css"

export default function QuizBtnFlat({
    answer,
}) {
    return (
        <div className={styles.buttonContainer}>
            <p>{answer}</p>
        </div>
    )
}