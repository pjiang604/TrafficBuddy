import styles from './searchBar.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link';

export default function SearchBar() {

    //still need to add the background colour when Anika inputs the root colours

    const [inputValue, setInputValue] = useState("");

    const changeValue = (changeVal) => {
        if (changeVal == "blank") {
            setInputValue("");
        } else if (changeVal == "currentLocation")
            setInputValue("3700 Willingdon Avenue, Burnaby B.C., Canada")
    }

    const [search, setSearch] = useState(null)

    const [searchData, setSearchData] = useState({
        searchTerm: ''
    })

    const CheckSearch = () => {
        if(typeof window !== 'undefined'){
            localStorage.setItem("searchTerm", searchData.searchTerm);
        }

    }


    return (
        <>
            <form className={styles.searchForm}>
                <div className={styles.searchContainer}>
                    <Link href="" onClick={() => CheckSearch()}>
                        <Image src="/formImages/magGlass.svg" height={20} width={20} className={styles.magImg} onClick={() => changeValue("currentLocation")} />
                    </Link>

                    <input type="text" id="search" name="search" placeholder='Search...'
                    className={styles.searchInput} 
                    onChange={(e => setSearchData({ ...searchData, searchTerm: e.target.value }))}>
                    </input>

                </div>




            </form>
        </>

    )
}