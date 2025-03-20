import React from 'react'
import Saludo from './components/Saludo.jsx'
import Button from './components/Button.jsx'


// rfce
function App() {
  return (
    <div>
      <h1>App</h1>
      <hr />
      <Saludo firstName = "Nicolas" />
      <Saludo firstName = "Marcelo" />
      <Saludo />
      <hr />
      <Button>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        In assumenda tempora aliquid, aperiam cum exercitationem perferendis.
        Blanditiis quas vitae provident quam. Neque perspiciatis molestiae a
        temporibus dicta ipsa! Rerum, ab.
      </Button>
    </div>
  )
}

export default App