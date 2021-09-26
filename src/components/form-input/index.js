import React from 'react';
import './styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
  <div className='input-group'>

    <input 
      className='input-group__input' 
      onChange={handleChange} {...otherProps} 
    />
    
    {
    label ? 
      <label
        className={`${otherProps.value.length 
                    ? 'input-group__label shrink' 
                    : 'input-group__label' }
                  `}
      >
        {label}
      </label>
     : null
    }
  </div>
)

};

export default FormInput;