import styles from './lptext.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function LPWTextButton({
    
    buttonText,

}) {

    return (
        <div className={styles.buttonContainer}>
            <p>{buttonText}</p>
        </div>
    )
}

