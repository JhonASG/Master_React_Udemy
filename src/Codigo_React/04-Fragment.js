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
    /*En react es necesario contener todas las etiquetas HTML que devuelva el componente
    dentro un elemento que los tenga para referenciarlo facilmente.

    En este caso el elemento contenedor es la etiqueta HTML <div></div>

    Pero contener los elementos HTML dentro del <div></div> puede convertirse en algo poco
    práctico, es acá donde entra el <Fragment>

    <Fragment></Fragment> es un componente encargado de empaquetar todas las etiquetas
    HTML que devuelve la Functional Component (PrimeraApp)

    Con el <Fragment></Fragment> evitamos los <div></div> innecesarios.

    Dado el caso de que las etiquetas HTML que deseamos retornar necesitemos que esten
    dentro de un <div></div> se puede utilizar este para empaquetarlas.

    Fragment - en su forma extensa e importandolo:

        import React, { Fragment } from 'react';

        <Fragment>
            <h1>Hola mundo!!</h1>
            <p>Mi primera aplicación</p>
        </Fragment>

    Fragment - en su forma corta y sin importarlo:

        import React from 'react';
        
        <>
            <h1>Hola mundo!!</h1>
            <p>Mi primera aplicación</p>
        </>
    */
    return (
        //Fragment
        <>
            <h1>Hola mundo!!</h1>
            <p>Mi primera aplicación</p>
        </>
    );
};

export default PrimeraApp;