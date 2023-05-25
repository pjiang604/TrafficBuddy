import { useState } from 'react'
import styles from './TextSize.module.css'

export default function TextToggle() {
    const [textSizeChange, setTextSizeChange] = useState('text-small')
    const [openOverlay, setOpenOverlay] = useState(false)

    const handleClick = (event) => {
        const size = event.target.value
        setTextSizeChange(size)
        document.body.style.fontSize = size
    }

    const handleToggle = () => {
        setOpenOverlay(!openOverlay)
    }
    return (
      <div className={styles.relative}>
        <label htmlFor="text-size-select" className={styles.first}>
        </label>
        <select 
        id="text-size-select"
        onChange={handleClick}
        className={styles.second}>
            <option value="text-small">Small</option>
            <option value="text-medium">Medium</option>
            <option value="text-large">Large</option>
        </select>
      </div>
    )

}