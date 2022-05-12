import React, {useState} from "react";
import PropsTypes from "prop-types";

//Functional component
const CounterApp = ({value}) =>{
    const titulo = 'CounterApp';
    const [counter, setCounter] = useState(value);
    
    const sumador = () => {
        setCounter((counter)=>counter+1);
    };

    const restador = () => {
        setCounter((counter)=>counter-1);
    };

    const reset = () =>{
        setCounter(value);
    };

    return (
        <>
            <h1>{titulo}</h1>
            <h2>{counter}</h2>
            <button className="FirstButton" onClick={sumador}>More</button>
            <button className="FirstButton" onClick={restador}>Less</button>
            <button className="FirstButton" onClick={reset}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropsTypes.number.isRequired
}

export default CounterApp;