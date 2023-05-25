import Carousel from "../itemCarousel"
import styles from './carouselContainer.module.css'
import { useState, useEffect } from "react"
import { carousel } from '@/data/carousel/carousel.js'
import Image from "next/image"


const CarouselContainer = () => {


    const [data, setData] = useState([...carousel.image])
    const [clothesColor, setClothesColor] = useState(true)
    const [foodColor, setFoodColor] = useState(true)
    const [medsColor, setMedsColor] = useState(true)
    const [waterColor, setWaterColor] = useState(true)
    const [list, setList] = useState()

    const changeClothes = () => {
        setClothesColor(!clothesColor)
    }

    const changeFood = () => {
        setFoodColor(!foodColor)
    }

    const changeMeds = () => {
        setMedsColor(!medsColor)
    }

    const changeWater = () => {
        setWaterColor(!waterColor)
    }


    return (
        <div className={styles.carouselContainer}>
            <Carousel
                className={styles.test}
                show={3}>
                <div className={styles.item}>
                    {clothesColor == true ? //Clothes image
                        <Image src={"/itemIcons/Clothes-Light.svg"} onClick={() => changeClothes() } alt="placeholder" width={60} height={60} className={styles.navIcon} /> :
                        <Image src={"/itemIcons/Clothes-Dark.svg"} onClick={() => changeClothes() } alt="placeholder" width={60} height={60} className={styles.navIcon} />}
                    <p>Clothing</p> 
                </div>

                <div className={styles.item}>
                    {foodColor == true ? //Food image
                        <Image src={"/itemIcons/Food-Light.svg"} onClick={() => changeFood()} alt="placeholder" width={60} height={60} className={styles.navIcon} /> :
                        <Image src={"/itemIcons/Food-Dark.svg"} onClick={() => changeFood()} alt="placeholder" width={60} height={60} className={styles.navIcon} />}
                        <p>Food</p>
                </div>

                <div className={styles.item}>
                    {medsColor == true ? //Meds image
                        <Image src={"/itemIcons/Meds-Light.svg"} onClick={() => changeMeds()} alt="placeholder" width={60} height={60} className={styles.navIcon} /> :
                        <Image src={"/itemIcons/Meds-Dark.svg"} onClick={() => changeMeds()} alt="placeholder" width={60} height={60} className={styles.navIcon} />}
                        <p>Medicine</p>
                </div>

                <div className={styles.item}>
                    {waterColor == true ? //Water image
                        <Image src={"/itemIcons/Water-Light.svg"} onClick={() => changeWater()} alt="placeholder" width={60} height={60} className={styles.navIcon} /> :
                        <Image src={"/itemIcons/Water-Dark.svg"} onClick={() => changeWater()} alt="placeholder" width={60} height={60} className={styles.navIcon} />}
                        <p>Water</p>
                </div>

            </Carousel>

        </div>
    )
}

export default CarouselContainer
