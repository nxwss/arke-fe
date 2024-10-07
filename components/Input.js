import React from 'react';

// Componente input di testo personalizzato
const InputText = ({ placeholder }) => {
  return (
    <input
      type="text"
      className="form-control" // Classe Bootstrap per gli input
      style={{
        borderColor: 'white',
        color: 'white',
        backgroundColor: 'transparent'
      }}
      placeholder={placeholder}
    />
  );
};

export default InputText;
