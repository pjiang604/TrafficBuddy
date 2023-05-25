import styles from './HeaderNav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HamburgerPopup from '../HamburgerPopup'

export default function HeaderNav({
    headers,
}) {

    const router = useRouter()

    return (
        <div className={styles.headerContainer}>
            <a onClick={() => router.back()} ><Image src="/navIcons/BackButton.svg" alt="placeholder" width={25} height={20} className={styles.backIcon} /></a>
            <h1 className={styles.title}>{headers}</h1>
            <div className={styles.hamburger}>
                <HamburgerPopup />
            </div>
        </div>
    )
}
