import React from 'react';
import PropTypes from 'prop-types';

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

PrimeraApp.defaultProps = {
    subtitulo: "Goku es el sayayin mas fuerte"
};

export default PrimeraApp;