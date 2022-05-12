//Manera rapida de importar react -> imr enter
import React from 'react';
import PropTypes from 'prop-types';

/*PropTypes
    
Vamos a obligar a otros desarrolladores que utilicen este componente a proporcionarle siempre las propiedades
que necesita para su óptimo funcionamiento, es por ello que debemos hacer validaciones para hacer que la app
falle si no ha recibido las propiedades que requiere para su funcionamiento.

*/

//Functional component -> primer componente con nombre PrimeraApp
const PrimeraApp = ({new_text, saludo})=>{
    const texto = 'My first application';
    const num = 1+2;
    const booleana = false;
    const arreglo = [1,2,3,4,5]
    const objeto = {
        nombre: "Jhon Sossa",
        edad: 23
    };

    return (
        <>
            <h1>{new_text}</h1>
            <h2>{saludo}</h2>
            <p>Texto: {texto}</p>
            <p>Numero: {num}</p>
            <p>Booleano: {booleana}</p>
            <p>Arreglo: {arreglo}</p>
            <pre>Objeto: {JSON.stringify(objeto, null, 3)}</pre>
            <pre>Desglose objeto: {JSON.stringify(`${objeto.nombre} tiene ${objeto.edad} años`, null, 3)}</pre>
        </>
    );
};

//Forma de validar que siempre el componente reciba las propiedades que requerimos
//Se pueden poner todas las propiedades que para el componente son obligatorias recibirlas
PrimeraApp.propTypes = {
    new_text: PropTypes.number.isRequired,
    saludo: PropTypes.string.isRequired
};

export default PrimeraApp;