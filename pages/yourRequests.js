import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Search.module.css'
import Link from 'next/link'
import Nav from '@/components/nav'
import HeaderNav from '@/components/HeaderNav'
import { text } from '@/data/text/text'
import { useState, useEffect } from 'react'
import { posts } from '@/data/posts'
import PostCard from '@/components/Posts/PostCard'


export default function yourRequests() {

    const [data, setData] = useState([...text.headers])
    const [data2, setData2] = useState([...posts.request])

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    useEffect(() => {
        const firstName = localStorage.getItem("userFirstName");
        const lastName = localStorage.getItem("userLastName");
        setFirstName(firstName);
        setLastName(lastName);
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
                        <HeaderNav
                            key={index}
                            headers={info.yourRequests} />
                    )
                })}
            </header>
            <main className={styles.main}>
                {data2 && data2.map((info2, index2) => {
                    return (
                        <Link href="./yourRequestsDetails">
                            <PostCard
                                key={index2}
                                profileImg={info2.profileImg}
                                firstName={firstName}
                                lastName={lastName}
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
                    srcProfile="/navIcons/ProfileOrange.svg" />
            </footer>
        </>
    )
}
