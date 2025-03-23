import React from 'react'

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [tyc, setTyc] = React.useState('');
  return (
    <>
    <form>
      <input 
        type="text" 
        name='searchTerm' 
        id='searchTerm'  
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
        value={searchTerm}
      />

      <fieldset>
        <legend>Estas de acuerdo con los TyC?</legend>
        <input 
          type="radio" 
          name="tyc" 
          id="si" 
          checked={tyc === 'si'}
          onChange={(event) => {
            setTyc(event.target.value);
            console.log(tyc);
          }}
          value = 'si'
        />
        <label htmlFor="si">Si</label>
        <br />
        <input 
          type="radio" 
          name='tyc' 
          id='no' 
          checked={tyc === 'no'}
          onChange={(event) => {
            setTyc(event.target.value);
            console.log(tyc);
          }}
          value = 'no' 
        />
        <label htmlFor="no">No</label>
      </fieldset>
    </form>

    <p>Buscaste: {searchTerm}</p>
    <button onClick={() => setSearchTerm('patines')}>Busca 'patines</button>
    </>
  )
}

export default App