import styles from './QuizButtons.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function QuizButton({

    option,

}) {

    return (
        <>
                <div className={styles.buttonContainer}>
                    <p>{option}</p>
                </div>

        </>


    )
}

