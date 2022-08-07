import React from 'react'
import './styles.scss'

const CustomButton = ({ disabled, children, ...otherProps }) => (
  <div className="custom-button__wrapper">
    <button
      className={`${disabled ? 'custom-button disabled' : 'custom-button'}`}
      {...otherProps}
    >
      <svg
        width="198px"
        height="48px"
        viewBox="1 1 198 48"
        className="border"
      >
        <polyline
          points="199,1, 199,47 3,47, 3,3, 199,3"
          className="bg-line"
        />
        <polyline
          points="199,1, 199,47, 3,47, 3,3, 199,3"
          className="hl-line"
        />
      </svg>
      <span>{children}</span>
    </button>
  </div>
)

export default CustomButton
