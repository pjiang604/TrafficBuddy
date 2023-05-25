import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Search.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState } from 'react'
import { requests } from '@/data/requests'
import FindPage from '@/components/FindRequests/FindPage'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'



export default function findRequest() {

  const [data, setData] = useState([...text.headers])
  const [data2, setData2] = useState([...requests.users])
  const [buttText, setButText] = useState([...text.buttons])

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
                headers={info.findRequest} />
          )
        })}
      </header>
      <main className={styles.main}>
        {data2 && data2.map((info2, index2) => {
          if(info2.userName=="Taylor S.") {
            return(
            <FindPage
            key={index2}
            profileImg={info2.profileImg}
            userName={info2.userName}
            timeFrame={info2.timeFrame}
            needs={info2.needs}
            location={info2.location}
            />
            )
          }
        }) }
        <div className={styles.btn}>
        {buttText && buttText.map((binfo, bindex) => {
          return (
                <Link href="/messages">
              <HPWTextButton
                key={bindex}
                buttonText={binfo.findMessage} />
             </Link>
          )
        })}
        </div>
       
      </main>
      <footer>
      <Nav 
      srcSearch="/navIcons/SearchOrange.svg"/>
      </footer>
    </>
  )
}