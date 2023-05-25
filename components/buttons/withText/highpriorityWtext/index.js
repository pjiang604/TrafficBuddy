import styles from './hptext.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HPWTextButton({

    buttonText,

}) {

    return (
        <div className={styles.buttonContainer}>
            <p>{buttonText}</p>
        </div>
    )
}

