import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Messages.module.css'
import ChatNav from '@/components/Messages/ChatNav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { messages } from '@/data/messages'
import { useState } from 'react'
import ChatPage from '@/components/Messages/ChatPage'

export default function Messages() {

  const [data, setData] = useState([...text.headers])
  const [data2, setData2] = useState([...messages.users])


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
              headers={info.chat} />
          )
        })}
      </header>

      <main className={styles.main}>
        {data2 && data2.map((info2, index2) => {
          if(info2.userName=="Taylor S."){
          return (
            <ChatPage
              key={index2}
              userName={info2.userName}
              needs={info2.needs} />
          )}
        })}


      </main>

      <footer>
        <ChatNav />
      </footer>
    </>
  )
}
