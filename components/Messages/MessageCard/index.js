import styles from './MessageCard.module.css'

export default function MessageCard({

    userName,
    time,
    color,
    message,
    number

}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.displayInfo}>
                    <h4>{userName}</h4>
                    <div className={styles.timeInfo}>
                        <p>{time} ago</p>
                        <div className={styles.circle} style={{backgroundColor: color }} >
                            {number}
                        </div>
                    </div >
                </div>
                <div className={styles.messagePreview}>
                    <p>{message}</p>
                </div>




            </div>
        </>
    )
}