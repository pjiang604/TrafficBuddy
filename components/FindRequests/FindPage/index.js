import styles from './FindPage.module.css'
import { requests } from '@/data/requests'
import { useState } from 'react'
import ViewRequest from '../ViewRequest'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'


export default function FindPage({

    userName,
    profileImg
   
}) {

const [data, setData] = useState([...requests.users])



return (
    <>
    
    <div className={styles.container}>
        <div className={styles.heading}>
        <Image src={profileImg} height={50} width={50} className={styles.imagePic} />
            <h1>{userName}'s Requests</h1>
        </div>

        {data && data.map((info, index) => {
            if(info.userName == "Taylor S.")
            return (
                <ViewRequest
                key={index}
                needs={info.needs}
                location={info.location}
                timeFrame={info.timeFrame}
                additionalComments={info.additionalComments}
                />
            )
        })}
    </div>


    </>
)
}