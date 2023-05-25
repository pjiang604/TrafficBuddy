import { useState } from 'react'
import Home from '@/pages/home'
import styles from './InputBoxes.module.css'
import Nav from '../nav'
import Image from 'next/image'
import HPWTextButton from '@/components/buttons/withText/highpriorityWtext'
import { text } from '@/data/text/text'
import { useRouter } from 'next/router'


export default function InputBoxes() {

    const [buttText, setButText] = useState([...text.buttons])

    const CheckName = () => {
        if(typeof window !== 'undefined'){
            localStorage.setItem("userFirstName", formData.firstName);
            localStorage.setItem("userLastName", formData.lastName);
            console.log("signuplocalstorage")
        }
    }

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    })
    const router = useRouter()
    const CheckLogin = () => {

        if (formData.firstName !== '') {
            router.push({
                pathname: './home'
            })
        }
    }


    return (
        <div className={styles.main}>
            <Image
                src="/logos/wordmarked_logo.png"
                alt=""
                width={200}
                height={200}
                className={styles.logoPic} />
            <h1>Sign Up</h1>

            <div className={styles.inputBox}>
                <h4>First Name:</h4>
                <input
                    onChange={(e => setFormData({ ...formData, firstName: e.target.value }))}
                    placeholder="Enter First Name"
                    type="text"
                    className={styles.input}
                />
            </div>

            <div className={styles.inputBox}>
                <h4>Last Name:</h4>
                <input
                    onChange={(e => setFormData({ ...formData, lastName: e.target.value }))}
                    type="text"
                    placeholder="Enter Last Name"
                    className={styles.input} />
            </div>
            <div className={styles.inputBox}>
                <h4>Email:</h4>
                <input
                    onChange={(e => setFormData({ ...formData, email: e.target.value }))}
                    type="email"
                    placeholder="Enter Email"
                    className={styles.input} />
            </div>
            <div className={styles.inputBox}>
                <h4>Password:</h4>
                <input
                    type="password"
                    placeholder="Enter Password"
                    className={styles.input}
                    onChange={(e => setFormData({ ...formData, password: e.target.value }))} />
            </div>
            <div className={styles.inputBox}>
                <h4>Confirm Password:</h4>
                <input type="password" placeholder="Confirm Password" className={styles.input} />
            </div>
            <div className={styles.joinButton}>
                {buttText && buttText.map((binfo, bindex) => {
                    return (
                        <a onClick={() => CheckName() + CheckLogin()}><HPWTextButton
                            key={bindex}
                            buttonText={binfo.join} /></a>
                    )
                })}
            </div>
        </div>
    )
}