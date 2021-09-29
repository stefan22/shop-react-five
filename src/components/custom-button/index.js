import React from 'react';
import './styles.scss';

const CustomButton = ({
  disabled,
  children,
  ...otherProps
}) => (
  <div className="custom-button__wrapper">
    <button
      className={`${
        disabled
          ? 'custom-button disabled'
          : 'custom-button'
      }`}
      {...otherProps}
    >
      <svg
        width="160px"
        height="50px"
        viewBox="0 0 160 50"
        className="border"
      >
        <polyline
          points="159,1 159,59 1,59 1,1 159,1"
          className="bg-line"
        />
        <polyline
          points="159,1 159,59 1,59 1,1 159,1"
          className="hl-line"
        />
      </svg>
      <span>{children}</span>
    </button>
  </div>
);

export default CustomButton;
