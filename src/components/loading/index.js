import React from 'react'
import styles from './loading.module.css'

const Loading = () => (
  <div className={styles.loader__wrapper}>
    <div className={styles.loader__container}>
      <svg
        version="1.1"
        id="L3"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
      >
        <circle
          fill="rgba(5,5,5,.5)"
          stroke="#edf0f3"
          strokeWidth="10"
          cx="30"
          cy="30"
          r="14"
        />
        <circle
          fill="#fff"
          stroke="#fd7e14"
          strokeWidth="3"
          cx="27"
          cy="54"
          r="7"
        >
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
    <span>Loading</span>
  </div>
)

export default Loading
