import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import { useEffect, useState } from 'react'
import { text } from '@/data/text/text'
import HeaderWithLogo from '@/components/HeaderWithLogo'


export default function Home() {

  const [data, setData] = useState([...text.headers])

  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    const firstName = localStorage.getItem("userFirstName");
    setFirstName(firstName);
    console.log("homelocalStorage")
  }, [])


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
            <HeaderWithLogo
              key={index}
              headers={info.home} />
          )
        })}

      </header>
      <main className={styles.main}>
        <div className={styles.welcomeMsg}>
          <h1 className={styles.welcome}>👋 Welcome, {firstName}!</h1>
        </div>
        <div className={styles.achievementButtons}>
        <Link href="/yourRequests"><button className={styles.buttons}>
          <div className={styles.inside}>
              <div className={styles.emoji}><span>📝</span></div>
            <div className={styles.achievementDesc}><p>Items Requested</p></div>
            </div>
          </button></Link>
          <Link href="/msghistory"><button className={styles.buttons}>
          <div className={styles.inside}>
              <div className={styles.emoji}><span>💬</span></div>
            <div className={styles.achievementDesc}><p>Message Overview</p></div>
            </div>
          </button></Link>
          <Link href="/profile"><button className={styles.buttons}>
            <div className={styles.inside}>
              <div className={styles.emoji}><span>👩</span></div>
            <div className={styles.achievementDesc}><p>Your Summary</p></div>
            </div>
          </button></Link>
        </div>
        <div className={styles.title}>
          <h2>Get Started</h2>
        </div>
        <div className={styles.quickLinks}>
        <Link href="/findRequest"><button>
        <div className={styles.quickInside}>
            <div className={styles.quickEmoji}><span>🤝</span></div>
            <div className={styles.quickTitle}><h2>Help Someone Nearby</h2>
        </div></div>
          </button></Link>
          <Link href="/requests">
            <button>
            <div className={styles.quickInside}>
            <div className={styles.quickEmoji}><span>🙋‍♀️</span></div>
            <div className={styles.quickTitle}><h2>Request<br />An <br />Item</h2>
        </div></div></button></Link>
        <Link href="/quizmain"><button> <div className={styles.quickInside}>
            <div className={styles.quickEmoji}><span>🧠</span></div>
            <div className={styles.quickTitle}><h2>Test<br />Your<br />Knowledge</h2>
        </div></div></button></Link>
        <Link href="/tips"><button><div className={styles.quickInside}>
            <div className={styles.quickEmoji}><span>💡</span></div>
            <div className={styles.quickTitle}><h2>Popular<br />Tips</h2>
        </div></div></button></Link>
        </div>
      </main>
      <footer>
      <Nav 
      srcHome="/navIcons/HomeOrange.svg"/>
      </footer>
    </>
  )
}
