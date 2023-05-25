import Image from 'next/image'
import styles from '@/styles/Tips.module.css'
import Link from 'next/link'
import HeaderNav from '@/components/HeaderNav'
import SearchBar from '@/components/formFields/SearchBar'
import TipsCard from '@/components/TipsCard'
import { tips } from '@/data/tips/tips'
import { useState, useEffect } from 'react'
import { text } from '@/data/text/text'
import Nav from '@/components/nav'

export default function Tips() {

  const [data, setData] = useState([...tips.card])
  const [data2, setData2] = useState([...text.headers])

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
      <header>
        {data2 && data2.map((info, index) => {
          return (
            <HeaderNav
              key={index}
              headers={info.tips} />
          )
        })}
      </header>

      <main className={styles.main}>
        <SearchBar />

        {data && data.map((info, index) => {
          if (info.title.includes(searchTerm))
          return (
      
              <TipsCard
                key={index}
                src={info.image}
                header={info.title}
                path={info.path}
              />

          )
        })}

      </main>

      <footer>
        <Nav/>
      </footer>
    </>
  )
}