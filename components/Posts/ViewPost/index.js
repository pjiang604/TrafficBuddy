import Image from "next/image";
import styles from './ViewPost.module.css'

export default function ViewPost({

   
    userName,
    needs,
    location,
    timeFrame,
    additionalComments

}) {
    return(
        <>
        <div className={styles.container}>
        <div className={styles.headshot}>
           
        </div>
       
        <div className={styles.need}>
        <h3>🙋‍♀️ Needs:</h3> 
        <p>{needs}</p>
        </div>
        <div className={styles.loc}>
        <h3>🌎 Location:</h3>  
        <p>{location}</p>
        </div>
        <div className={styles.time}>
        <h3>⏱ TimeFrame:</h3> 
        <p>{timeFrame}</p> 
        </div>
        <div className={styles.comments}>
        <h3>💬 Additional Comments:</h3>  
        <p>{additionalComments}</p>
        </div>
        </div>
        </>
    )
}