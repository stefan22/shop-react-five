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
        width="162px"
        height="52px"
        viewBox="1 1 160 50"
        className="border"
      >
        <polyline
          points="157,1 157,47 1,47 1,1 157,1"
          className="bg-line"
        />
        <polyline
          points="157,1 157,47 1,47 1,1 157,1"
          className="hl-line"
        />
      </svg>
      <span>{children}</span>
    </button>
  </div>
);

export default CustomButton;
