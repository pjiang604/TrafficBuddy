import styles from './mptext.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function MPWTextButton({
    
    buttonText,

}) {


    return (
        <div className={styles.buttonContainer}>
            <p>{buttonText}</p>
        </div>
    )
}

