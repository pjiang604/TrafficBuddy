import styles from './LogOut.module.css'
import Link from 'next/link'
import Popup from '@/hooks/logoutpopup'
import React, { useState } from 'react'

export default function LogOutPopup() {

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <div className={styles.open} onClick={() => setButtonPopup(!buttonPopup)}>
                ✖️ Log Out
                </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                {buttonPopup && (
                    <div className={styles.popupContent}>
                        <div className={styles.title}>Do you want to log out?</div>
                        <div className={styles.buttons}>
                        <button><Link href="/">Log Out</Link></button>
                        <button onClick={() => setButtonPopup(!buttonPopup)}>Cancel</button>
                    </div></div>
                    )}
            </Popup>
        </div>
)
}