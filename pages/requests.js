import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Requests.module.css'
import Location from '@/components/formFields/location'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import HeaderNav from '@/components/HeaderNav'
import CharCount from '@/components/formFields/characterCount/characterCount'
import Nav from '@/components/nav'
import CarouselContainer from '@/components/formFields/carouselContainer'
import { text } from '@/data/text/text'
import { useState } from 'react'
import MPWTextButton from '@/components/buttons/withText/medpriorityWtext'
import LPWTextButton from '../components/buttons/withText/lowpriorityWtext'
import Link from 'next/link'

export default function Requests() {

  const [data, setData] = useState([...text.headers])
  const [buttText, setButText] = useState([...text.buttons])

  const [showDisplay, setShowDisplay] = useState(false)

  return (
    <>
      <Head>
        <title>Traffic Buddy</title>
        <meta name="description" content="Traffic Buddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>

        {data && data.map((info, index) => {
          return (
            <HeaderNav
              key={index}
              headers={info.newRequest} />
          )
        })}

      </header>

      <main className={styles.main}>

        <Location />
        <CarouselContainer />
        <CharCount />
        <div className={styles.whenContainer}>
          <label for="when">When do you need it?</label>
          <select name="when" id="when" className={styles.whenField}>
            <option value="ASAP">ASAP</option>
            <option value="10-30mins">10-30mins</option>
            <option value="30-60mins">30-60mins</option>
            <option value="60+mins">60+mins</option>
          </select>
        </div>

        <div className={styles.button}>

          {buttText && buttText.map((binfo, bindex) => {
            return (
              <a onClick={() => setShowDisplay(true)}><HPWTextButton
                key={bindex}
                buttonText={binfo.postRequest}
              /></a>
            )
          })}

        </div>

        <div className={styles.successContainer} style={{ display: showDisplay ? 'block' : 'none' }}>
          <h1>Success!</h1>
          <h3>Your post is live and ready to be fulfilled.</h3>
          <div className={styles.firstBtn}>
            {buttText && buttText.map((binfo, bindex) => {
              return (
                <Link href="/msghistory"><LPWTextButton
                  key={bindex}
                  buttonText={binfo.cta} /></Link>
              )
            })}
            {buttText && buttText.map((binfo, bindex) => {
              return (
                <Link href="/home"><LPWTextButton
                  key={bindex}
                  buttonText={binfo.home}
                  /></Link>
              )
            })}
          </div>

        </div>


      </main>

      <footer>
        <Nav
          srcRequest="/navIcons/AddOrange.svg" />
      </footer>
    </>
  )
}

