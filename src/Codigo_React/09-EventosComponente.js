/*
Eventos en REACT:

-> En este link esta la documentación para los eventos: https://es.reactjs.org/docs/events.html

Si deseo utilizar un evento dicho evento va a ejecutar una función entonces hay varias formas de declararlo

1) onClick={mensajeSumador(value)}

Declararlo de la anterior forma me indica que la función mensajeSumador deberá retornar una función para que
funcione correctamente

2)onClick={() => {mensajeSumador(value)}}

Declararlo de esta manera ya la función mensajeSumador no es necesario que retorne algo, simplemente puede tener
el código que se desea ejecutar

3)onClick={() => {Codigo que se desea ejecutar}}

Esta última manera de declarar un evento es no tener una función externa que se va a ejecutar si no que se tiene
todo el código que se va a ejecutar dentro de la llaves donde vemos el mensaje "Codigo que se desea ejecutar".

Nota: Hacerlo de la tercera forma puede ser más complicado de interpretar para el desarrollador, se recomienda mejor
emplear el método 1 y 2.
*/
import React from "react";
import PropsTypes from "prop-types";

//Functional component
const CounterApp = ({value}) =>{
    const titulo = 'CounterApp';
    
    const mensajeSumador = (mensaje) => {
        return () => console.log(mensaje);
    };

    return (
        <>
            <h1>{titulo}</h1>
            <h2>{value}</h2>
            <button className="FirstButton" onClick={mensajeSumador(value)}>Sumador</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropsTypes.number.isRequired
}

export default CounterApp;