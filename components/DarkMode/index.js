import styles from "./DarkMode.module.css";
import { useState } from 'react';
import { useEffect } from 'react';

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className={styles.darkButton}>
            <button  onClick={handleToggleDarkMode}>
                {isDarkMode ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
}