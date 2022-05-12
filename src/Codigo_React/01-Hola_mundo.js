//Para utilizar React debemos importarlo
//Al querer renderizar una etiqueta JSX en el DOM mediante React debemos importar createRoot
import React from 'react';
import {createRoot} from 'react-dom/client';

//Vamos a crear una etiqueta <h1></h1> mediante JSX
const saludo = <h1>Hola mundo!!!</h1>;
const container = document.querySelector("#root");
//Se crea una constante donde con createRoot() se le pasa el sitio, el lugar o el DOM donde se va a
//renderizar la etiqueta JSX
const root = createRoot(container);

//Ahora vamos a renderizar la etiqueta <h1></h1> en el HTML
//Tener en cuenta que donde se va a renderizar el REACT es en public -> index.html -> div (id: root)
//root.render(Elemento a enviar al DOM) de esta manera renderizamos una etiqueta JSX
root.render(saludo);