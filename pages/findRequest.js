import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Search.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState, useEffect } from 'react'
import { requests } from '@/data/requests'
import SearchBar from '@/components/formFields/SearchBar'
import FindCard from '@/components/FindRequests/FindCard'



export default function findRequest() {

  const [data, setData] = useState([...text.headers])
  const [data2, setData2] = useState([...requests.users])

  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    localStorage.setItem("searchTerm", "");
  }, [])

  useEffect(() => {
    const searchTerm = localStorage.getItem("searchTerm");
    setSearchTerm(searchTerm);
  })


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
        <SearchBar />

        {data2 && data2.map((info2, index2) => {
          if (info2.userName.includes(searchTerm) || info2.timeFrame.includes(searchTerm) || info2.needs.includes(searchTerm) || info2.location.includes(searchTerm))
            return (
              <Link href="./findRequestDetails">
                <FindCard
                  key={index2}
                  profileImg={info2.profileImg}
                  userName={info2.userName}
                  timeFrame={info2.timeFrame}
                  needs={info2.needs}
                  location={info2.location}
                />
              </Link>
            )
        }
        )}

      </main>
      <footer>
        <Nav
          srcSearch="/navIcons/SearchOrange.svg" />
      </footer>
    </>
  )
}
