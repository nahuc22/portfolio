import React from 'react';
import styles from './Button.module.css';

export default function Button() {
  return (
    <div>
      <button className={styles.button}>
        <span className={styles.text}>RESUME</span>
        <span className={styles.icon}>
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          ></svg>
          <span className={styles.buttonSpan}>↗</span>
        </span>
      </button>
    </div>
  );
}