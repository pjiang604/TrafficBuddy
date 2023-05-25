import styles from './lpnotext.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function LpNTextButton() {

    return (
        <div className={styles.buttonContainer}>
            <Image src="/placeholder.jpg" alt="placeholder" width={30} height={30} className={styles.navIcon} />
        </div>
    )
}
