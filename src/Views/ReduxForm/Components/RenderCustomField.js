import React from 'react'

const RenderCustomField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
    </div>
  )
}

export default 
  RenderCustomField
