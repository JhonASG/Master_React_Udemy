/*Se crea este archivo .js que se convertira en el primer componente de la aplicación

Para identificar fácil un componente, existe una convención para nombrar el componente con cada
palabra empezando por mayuscula. Ejm: PrimeraApp.js.

Tenemos dos tipos de componentes basados en clases o en base a funciones, siembargo, React apunta
a manejar los componentes en base a funciones.

Estas funciones se llaman Functional components

Un functional component va a retornar etiquetas HTML
*/

//Manera rapida de importar react -> imr enter
import React from 'react';

//Functional component -> primer componente con nombre PrimeraApp
const PrimeraApp = ()=>{
    return <h1>Hola mundo!!</h1>;
};

export default PrimeraApp;

//Este componente luego se exporta en el index.js para utilizarlo en la aplicación