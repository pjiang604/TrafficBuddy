import styles from './PostPage.module.css'
import { posts } from '@/data/posts'
import { useState } from 'react'
import ViewPost from '../ViewPost'
import Image from 'next/image'


export default function PostPage({

    firstName,
    lastName,
    profileImg,
    needs,
   
}) {

const [data, setData] = useState([...posts.request])



return (
    <>
    
    <div className={styles.container}>
        <div className={styles.heading}>
        <Image src={profileImg} height={50} width={50} className={styles.imagePic} />
            <h1>{firstName} {lastName}'s Requests</h1>
        </div>

        {data && data.map((info, index) => {
            if(info.needs == "Water, Blanket")
            return (
                <ViewPost
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