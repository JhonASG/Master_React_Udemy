/*
Componente en React:

Es una pequeña pieza de código encapsulada reutilizable que realiza un trabajo en especifico, la cual puede tener 
un estado o no.

Los componentes son los objetos que integran una aplicación, por ejemplo toda la aplicación es el componente padre
la cual tiene un componente hijo que puede ser el menú, luego el menú tiene un componente hijo que son los item que
componen dicho menú.

En una aplicación nos podemos encontrar los siguientes componentes

App_principal -> Router -> Screen/Página -> Menú -> MenuItem -> etc.

Donde el Router permite cambiar de Screen/Página sin tener que recargar la ventana.

Estado:

Es como podemos encontrar la información en el componente en el momento actual, ya sea el estado inicial o el estado
en el que se encuentra el componente cuando el cliente o usuario a generado un cambio en él.

PWA -> Aplicación web progresiva
*/
//Para importar los estilos css -> import './nombre_archivo.css'

import React from 'react';
import {createRoot} from 'react-dom/client';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

//Para llamar el componente que estamos importando lo hacemos así <nombre_componente />
/*Se puede enviar una propiedad o información al componente o componente que se este utilizando para ello se agrega de 
la siguiente manera

    const nombre_variable = <nombre_componente new_properties=value />
*/

/*
//Esto es de la PrimeraAPP

const saludo = <PrimeraApp new_text={123} saludo="Hola soy Veguetta" />;
const container = document.querySelector("#root");
const root = createRoot(container);

root.render(saludo);
*/

//Tarea nuevo componente

const valorNumber = <CounterApp value={1998} />;
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(valorNumber);