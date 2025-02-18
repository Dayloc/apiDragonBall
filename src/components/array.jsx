import React from 'react';

function Array() {
  const myArray = ["casa", "perro", "gato"];

  return (
    <div>
      <h2>Mi Array:</h2>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Array; // Exportación por defecto