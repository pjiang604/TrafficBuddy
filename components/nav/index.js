import styles from './nav.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav({

    srcHome = "/navIcons/Home.png",
    srcSearch ="/navIcons/Search.png",
    srcRequest = "/navIcons/Add.png",
    srcMsg = "/navIcons/Messages.png",
    srcProfile = "/navIcons/Profile.png",

}) {


    return (
        <div className={styles.navContainer}>
            <Link href="/home">
                <Image src={srcHome} alt="home" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/findRequest">
                <Image src={srcSearch} alt="search" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/requests">
                <Image src={srcRequest} alt="add" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/msghistory">
                <Image src={srcMsg} alt="messages" width={60} height={60} className={styles.navIcon} />
            </Link>
            <Link href="/profile">
                <Image src={srcProfile} alt="profile" width={60} height={60} className={styles.navIcon} />
            </Link>


        </div>
    )
}
