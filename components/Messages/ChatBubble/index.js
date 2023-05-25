import Image from 'next/image'
import styles from './ChatBubble.module.css'

export default function ChatBubble({

    profileImg,
    message1,
    userMsg1,
    message2,
    userMsg2,
    message3,
    userMsg3

}) {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.headshot}>
                    <Image src={profileImg} height={50} width={50} className={styles.imagePic} />
                </div>
                <div className={styles.message}>
                    {message1}
                </div>

            </div>
            <div className={styles.userContainer}>
                <div className={styles.headshot}>
                    <Image src="/headshots/profile.jpeg" height={50} width={50} className={styles.imagePic} />
                </div>
                <div className={styles.userMessage}>
                    {userMsg1}
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.headshot}>
                    <Image src={profileImg} height={50} width={50} className={styles.imagePic} />
                </div>
                <div className={styles.message}>
                    {message2}
                </div>

            </div>
            <div className={styles.userContainer}>
                <div className={styles.headshot}>
                    <Image src="/headshots/profile.jpeg" height={50} width={50} className={styles.imagePic} />
                </div>
                <div className={styles.userMessage}>
                    {userMsg2}
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.headshot}>
                    <Image src={profileImg} height={50} width={50} className={styles.imagePic} />
                </div>
                <div className={styles.message}>
                    {message3}
                </div>
            </div>
            <div className={styles.userContainerMessage}  style={{ display: userMsg3 !== null? 'flex' : 'none' }}>
                <div className={styles.headshot}>
                    <Image src="/headshots/profile.jpeg" height={50} width={50} className={styles.imagePic} />
                </div>
                <div className={styles.userMessage}>
                    {userMsg3}
                </div>

            </div>
        </>
    )
}