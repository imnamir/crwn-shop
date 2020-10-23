import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...rest}) =>(
  <div className="group">
    <input 
    onChange={handleChange}  {...rest}
    className="form-input"
    />
    {
      label ? (
        <label className={`${rest.value ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null
    }
  </div>
)

export default FormInput;