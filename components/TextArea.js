import React from 'react';

const TextArea = ({ placeholder }) => {
  return (
    <textarea
      className="form-control"
      style={{
        borderColor: 'white !important',
        color: 'white',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '6px'
      }}
      placeholder={placeholder}
      rows="4"
    />
  );
};

export default TextArea;