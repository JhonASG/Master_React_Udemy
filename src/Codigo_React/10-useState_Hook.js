import React, {useState} from "react";
import PropsTypes from "prop-types";

//Functional component
const CounterApp = ({value}) =>{
    const titulo = 'CounterApp';
    
    //Constante para llamar al HOOK useState
    /*
    El Hook useState es una funcion que recibe un parametro x y devuelve un objeto con dos elementos uno es el
    mismo parametro x que se le pasa y el otro es una funcion, para lo cual se realiza una desestructuracion
    de arreglos para obtener cada parametro de la funcion useState por separado.

    const [counter, setCounter] = useState(0);

    si se desea modificar el parametro counter lo puedo hacer al pasarle counter como parameto a la funcion
    setCounter()
    
    setCounter((argumento)=> accion)
    setCounter((counter)=> counter + 1)
    */
    const [counter, setCounter] = useState(0);
    
    const mensajeSumador = () => {
        //setCounter(counter + 1);
        setCounter((c)=>c+1);
    };

    return (
        <>
            <h1>{titulo}</h1>
            <h2>{counter}</h2>
            <button className="FirstButton" onClick={mensajeSumador}>Sumador</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropsTypes.number.isRequired
}

export default CounterApp;