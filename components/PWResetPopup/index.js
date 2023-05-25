import styles from './PWResetPopup.module.css'
import Link from 'next/link'
import Popup from '@/hooks/pwpopup'
import React, { useState } from 'react'

export default function pwPopup() {

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <div className={styles.open} onClick={() => setButtonPopup(!buttonPopup)}>
                <button>Reset My Password</button>
                </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                {buttonPopup && (
                    <div className={styles.popupContent}>
                        <div className={styles.title}>Password Reset Link Sent</div>
                        <div className={styles.desc}>A reset link has been sent to your email.</div>
                        <div className={styles.buttons}>
                        <button><Link href="/login">Log In</Link></button>
                    </div></div>
                    )}
            </Popup>
        </div>
)
}