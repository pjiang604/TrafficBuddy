import React from "react";
import styles from './characterCount.module.css'

export default function CharCount() {
  const [count, setCount] = React.useState(0);
  return (
    <div className={styles.countContainer}>
          <label for="details">Provide more details:</label>
          <textarea id="details" name="details" rows="4" maxLength={500} className={styles.detailsField} onChange={e => setCount(e.target.value.length)}>
        </textarea>
      <p className={styles.count}>{count}/500</p>
    </div>
  );
}