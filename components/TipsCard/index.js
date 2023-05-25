import styles from './tipsCard.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function TipsCard({
    src,
    header,
    height = 210,
    width = 500,
    path

}) {
    return (
        <>
            <Link href={path}>
                <div className={styles.tipsContainer}>

                    <Image src={src} width={width} height={height} className={styles.tipsImg} />
                    <div className={styles.tipsHeader}>
                        <p>{header}</p>
                    </div>
                </div>
            </Link>

        </>
    )
}