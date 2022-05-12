//Manera rapida de importar react -> imr enter
import React from 'react';
import PropTypes from 'prop-types';

/*DefaultProps

Default values en las properties si deseamos recibir una propiedad a la cual le vamos a asignar un valor por defecto
lo que hacemos es ponerla en la desestructuración del objeto recibido como una de sus propiedades, para luego poder
con los siguientes comandos indicarle el valor por defecto que debe tener esa propiedad.

*/

const PrimeraApp = ({new_text, saludo, subtitulo})=>{
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
            <h3>{subtitulo}</h3>
            <p>Texto: {texto}</p>
            <p>Numero: {num}</p>
            <p>Booleano: {booleana}</p>
            <p>Arreglo: {arreglo}</p>
            <pre><p>Objeto:</p> {JSON.stringify(objeto, null, 3)}</pre>
            <pre><p>Desglose objeto:</p> {JSON.stringify(`${objeto.nombre} tiene ${objeto.edad} años`, null, 3)}</pre>
        </>
    );
};

PrimeraApp.propTypes = {
    new_text: PropTypes.number.isRequired,
    saludo: PropTypes.string.isRequired
};

//Esta es la forma de darle a una propiedad del componente un valor por defecto sin la necesidad de recibir ese valor desde el elemento padre.
//Al hacerlo así esta propiedad por defecto se esta añadiendo como una propiedad del componente.
PrimeraApp.defaultProps = {
    subtitulo: "Goku es el sayayin mas fuerte"
};

export default PrimeraApp;