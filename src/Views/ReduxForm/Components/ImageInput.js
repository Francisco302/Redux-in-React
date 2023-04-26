import React from 'react';

const ImageInput = ({
  input: { value, onChange },
  meta: { touched, error },
  ...rest
}) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    onChange(file);
    if(
        file.name.toString().toLowerCase().split('.').pop() === 'png' ||
        file.name.toString().toLowerCase().split('.').pop() === 'jpg' ||
        file.name.toString().toLowerCase().split('.').pop() === 'jpeg'
    ){
        rest.setIsImageValid(true);
    }else 
        rest.setIsImageValid(false);
  };


  return (
    <div>
      <input
        {...rest}
        type="file"
        onChange={handleChange}
      />
      {touched && error && <span>{error}</span>}
      {value && <img src={URL.createObjectURL(value)} alt="Preview" />}
    </div>
  );
};

export default ImageInput;