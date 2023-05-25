import CharCount from '@/components/formFields/characterCount/characterCount'
import styles from './ChatNav.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import React from 'react'

export default function ChatNav() {


    const [count, setCount] = React.useState(0);
    const [message, setMessage] = useState({
        message: '',
    })
    const router = useRouter()

    const sendMessage = () => {
        console.log(message.message)

        {
            router.push({
                query: {
                    message: message.message
                }
            })
        }
    }


    return (
        <>
            <div className={styles.navContainer}>
                <div className={styles.messageFeatures}>
                    <div className={styles.messageMedia}>
                        <p className={styles.count}>{count}/300</p>
                    </div>
                    <input type="text" id="details" name="details" maxLength={300} className={styles.detailsField} onChange={e => setCount(e.target.value.length) + setMessage({ ...message, message: e.target.value })}>
                    </input>


                </div>
                <div className={styles.sendButton}>
                    <a onClick={() => sendMessage()}>
                        <Image src="/navIcons/SendButton.svg" height={80} width={80} />
                    </a>
                </div>
                <div>

                </div>

            </div>
        </>
    )
}

