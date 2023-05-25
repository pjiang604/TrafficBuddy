import styles from './location.module.css'
import Image from 'next/image'
import { useState } from 'react'

export default function Location() {

    //still need to add the background colour when Anika inputs the root colours

    const[inputValue, setInputValue] = useState("");

    const changeValue = (changeVal) => {
        if (changeVal == "currentLocation")
        setInputValue("3700 Willingdon Avenue, Burnaby B.C., Canada")
    }





    return (
        <>
            <form className={styles.locationForm}>
                <div className={styles.locationContainer}>
                    <label for="location">Your Location</label>
                    <input type="text" id="location" name="location" className={styles.locationInput} value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
                    </input>
                    <Image src="/formImages/Location.png" height={20} width={20} className={styles.locationImg} onClick={() => changeValue("currentLocation")}/>
                </div>




            </form>
        </>

    )
}

