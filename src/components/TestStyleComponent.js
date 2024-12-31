import React from 'react';

function TestStyleComponent() {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      This is a Test Component with direct styles applied!
    </div>
  );
}

export default TestStyleComponent; // Corrected with default export