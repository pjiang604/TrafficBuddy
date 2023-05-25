import styles from './HeaderWithLogo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HamburgerPopup from '../HamburgerPopup'


export default function HeaderWithLogo ({
    headers,
}) {

    const router = useRouter()

    return (
        <div className={styles.headerContainer}>
                <h1 className={styles.title}>{headers}</h1>
                <div className={styles.hamburger}>
               <HamburgerPopup />
               </div>
        </div>
    )
}
