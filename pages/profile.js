import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Profile.module.css'
import Link from 'next/link'
import FulfilledChart from '../components/FulfilledChart'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState, useEffect } from 'react'
import LPWTextButton from '@/components/buttons/withText/lowpriorityWtext'

export default function Profile() {

  const [data, setData] = useState([...text.headers])
  const [buttText, setButText] = useState([...text.buttons])

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    const firstName = localStorage.getItem("userFirstName");
    setFirstName(firstName);
    const lastName = localStorage.getItem("userLastName");
    setLastName(lastName);
    console.log("ProfilelocalStorage")
  }, [])

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

        {data && data.map((info, index) => {
          return (
            <HeaderNav
              key={index}
              headers={info.profile} />
          )
        })}

      </header>
      
      <main className={styles.main}>
        <div className={styles.profilePic}>
          <Image
            src="/headshots/profile.jpeg"
            alt="profile pic"
            width={250}
            height={250}
          />
          <h1 className={styles.name}>{firstName} {lastName}</h1>
          <div className={styles.postButton}>
            {buttText && buttText.map((binfo, bindex) => {
              return (
                <Link href="./yourRequests">
                <LPWTextButton
                  key={bindex}
                  buttonText={binfo.viewPosts} />
                </Link>
              )
            })}
          </div>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>Way to lend a helping hand in 2023 so far, {firstName} 👏</h2>
          <p className={styles.description}>Check out your stats on how many requests you've fulfilled so far in 2023:</p>
        </div>
        <div className={styles.chartContainer}>
          <FulfilledChart />
        </div>
      </main>

      <footer>
        <Nav 
        srcProfile="/navIcons/ProfileOrange.svg"/>
      </footer>
    </>
  )
}
