import React from 'react'

function Saludo({firstName}) {
  return (
    <div style ={{
        color: 'purple',
        textAlign: 'center',
        fontSize: '1.5rem',
    }}>
        <p>Hola, {firstName ?? 'estudiante'}</p>
    </div>
  )
}

export default Saludo