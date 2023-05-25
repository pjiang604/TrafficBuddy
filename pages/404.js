import Head from 'next/head'
import styles from '@/styles/ErrorPage.module.css'
import Image from 'next/image'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import { useState } from 'react'
import { text } from '@/data/text/text'
import Link from 'next/link'

export default function ErrorPage() {
    const [buttText, setButText] = useState([...text.buttons])
return (
<>
<Head>
    <title>Traffic Buddy</title>
    <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
</Head>
<div className={styles.content}>

    <h1 className={styles.header}>404</h1>
    <h2 className={styles.subheader}>Page Not Found</h2>
    <Image className={styles.img} src="/logos/logo.png" height={150} width={180} />
    <p>Hold tight while we construct this page!</p>
    <div className={styles.btn}>
          {buttText && buttText.map((binfo, bindex) => {
            return (
              <Link href="/home">
                <HPWTextButton
                  key={bindex}
                  buttonText={binfo.errorPage} />
              </Link>
            )
          })}
        </div>
</div>

</>

)

}