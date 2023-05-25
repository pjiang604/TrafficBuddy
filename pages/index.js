import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Landing.module.css'
import Link from 'next/link'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import { text } from '@/data/text/text'
import { useState } from 'react'

export default function Landing() {

  const [data, setData] = useState([...text.headers])
  const [buttText, setButText] = useState([...text.buttons])

  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main className={styles.main}> 
      <div className={styles.logo}>
      <Image 
      src="/logos/wordmarked_logo.png"
      alt=""
      width={300}
      height={300}
      /></div>
      <div className={styles.button}>
      {buttText && buttText.map((binfo, bindex) => {
              return (
                <Link href="/signup"><HPWTextButton
                  key={bindex}
                  buttonText={binfo.getStarted} /></Link>
              )
            })}
      </div>
      <div className={styles.text}>
        <p>Already have an account?</p>
        <h3><Link href="/login">Log in here</Link></h3>
      </div>
      </main>
    </>
  )
}
