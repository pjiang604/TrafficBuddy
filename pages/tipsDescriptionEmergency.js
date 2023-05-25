import Image from 'next/image'
import styles from '@/styles/TipsDescription.module.css'
import Link from 'next/link'
import TipsHeader from '@/components/TipsHeader'
import SearchBar from '@/components/formFields/SearchBar'
import TipsDescription from '@/components/TipsDescription'
import { tips } from '@/data/tips/tips'
import { useState } from 'react'
import { text } from '@/data/text/text'
import Nav from '@/components/nav'

export default function TipsEmergency() {

    const [data, setData] = useState([...tips.card])
    const [data2, setData2] = useState([...text.headers])

    return (
        <>
            <header>
                {data2 && data2.map((info, index) => {
                    return (
                        <TipsHeader
                        key={index}
                        headers={info.tips}
                        />
                    )
                })}
            </header>

            <main className={styles.main}>
                {data && data.map((infoTip, indexTip) => {
                    if (infoTip.title == "5 Useful Emergency Items for Your Car")
                        return (
                            <TipsDescription
                                key={infoTip}
                                image={infoTip.image}
                                title={infoTip.title}
                                description={infoTip.description}
                                subheader={infoTip.subheader}
                                accordion1={infoTip.accordion1}
                                accordion2={infoTip.accordion2}
                                accordion3={infoTip.accordion3}
                                accordion4={infoTip.accordion4}
                                accordion5={infoTip.accordion5}
                                accordion1Desc={infoTip.accordion1Desc}
                                accordion2Desc={infoTip.accordion2Desc}
                                accordion3Desc={infoTip.accordion3Desc}
                                accordion4Desc={infoTip.accordion4Desc}
                                accordion5Desc={infoTip.accordion5Desc} />
                        )
                })}
            </main>

            <footer>
                <Nav />
            </footer>
        </>
    )
}