import styles from './PostCard.module.css'
import Image from 'next/image'

export default function PostCard({
    firstName,
    lastName,
    timeFrame,
    needs,
    location,
    profileImg
}) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.img}>
                    <Image src={profileImg} height={75} width={75} className={styles.imagePic} />
                </div>
                <div className={styles.content}>
                    <div className={styles.displayInfo}>
                        <h4 className={styles.name}><b>{firstName} {lastName}</b></h4>
                            <h4><b>{timeFrame}</b></h4>
                    </div>
                    <div className={styles.requests}>
                        <div className={styles.textAlign}>
                            <p className={styles.text}>Needs:</p>
                            <p>{needs}</p>
                        </div>
                        <div className={styles.textAlign}>
                            <p className={styles.text}>Location:</p>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}