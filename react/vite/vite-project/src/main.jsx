// importamos dependencias
import React  from 'react';
import { createRoot } from 'react-dom/client';

/* creamos elemento react
const element = React.createElement(
  'h1',
  {id: 'header'},
  'Hola React'
); */

//jsx
const element = (
  <div class="container">
    <p class='parrafo-1'>
      este es el parrafo 1
      <a href="https://www.google.com/">y esto va a google</a>
    </p>
  </div>

);



// renderizamos la aplicacion
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);
