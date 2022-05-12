/*
Con el atajo rafc, rafce, rafcp se puede crear facilmente un componente
*/
import React from "react";
import PropsTypes from "prop-types";

//Functional component
const CounterApp = ({value}) =>{
    const titulo = 'CounterApp';

    return (
        <>
            <h1>{titulo}</h1>
            <h2>{value}</h2>
        </>
    );
};

CounterApp.propTypes = {
    value: PropsTypes.number.isRequired
}

export default CounterApp;