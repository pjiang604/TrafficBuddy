import ChatBubble from '../ChatBubble'
import styles from './ChatPage.module.css'
import { messages } from '@/data/messages'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ChatPage({

    userName,
    needs,

}) {

    const [data, setData] = useState([...messages.users])

    const searchParams = useSearchParams();
    const message = searchParams.get('message')

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h4>Chatting with <b>{userName}</b></h4>
                    <p>"{needs}"</p>
                </div>

                {data && data.map((info, index) => {
                    if(info.userName == "Taylor S.")
                    return (
                        <ChatBubble
                            key={index}
                            profileImg={info.profileImg}
                            message1={info.message[0]}
                            message2={info.message[1]}
                            message3={info.message[2]}
                            userMsg1={info.userMessage[0]}
                            userMsg2={info.userMessage[1]}
                            userMsg3={message}
                            />
                    )
                })}
            </div>

        </>
    )
}