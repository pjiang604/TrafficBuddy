import React, { useState } from 'react'
import styles from '../components/PWResetPopup/PWResetPopup.module.css'

export default function Popup(props) {

return (props.trigger) ? (
    <div className={styles.popupContainer}>
        <div className={styles.popupLinks}>
            { props.children }
        </div>
    </div>
    ) : "";
}