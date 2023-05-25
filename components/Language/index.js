import styles from './language.module.css'

export default function LanguageToggle() {
    return(
        <div className={styles.relative}>
            <label className={styles.first}>

            </label>
            <select 
            id="text=language-select"
            className={styles.second}>
                <option value="text-english">English</option>
                <option value="text-french">French</option>
            </select>
            </div>
    )
}