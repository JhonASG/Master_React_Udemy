//Manera rapida de importar react -> imr enter
import React from 'react';

//Functional component -> primer componente con nombre PrimeraApp
const PrimeraApp = ()=>{
    //JSX para las etiquetas HTML
    const saludo = 'Hello world!!!';
    const texto = 'My first application';
    const num = 1+2;
    //Los booleanas y una constante con valor undefined no se van a imprimir en una etiqueta HTML
    const booleana = false;
    const indefinida = undefined;
    const arreglo = [1,2,3,4,5]
    const objeto = {
        nombre: "Jhon Sossa",
        edad: 23
    };

    return (
        //Fragment
        <>
            {/*Para poner en las etiquetas HTML una cadena
            almacenada en una variable debemos abrir y cerrar
            llaves y dentro de las llaves poner el nombre
            de la variable donde se almacena el mensaje.

            React permite que cuando se le pase un arreglo a una etiqueta HTML
            este arreglo muestra cada elemento como independiente donde visualmente
            parecen concatenados.

            En React yo no puedo imprimir un objeto en una etiqueta HTML para poder 
            hacerlo debería utilizar el siguiente comando:
            
                const objeto = {
                    nombre: "Jhon Sossa",
                    edad: 23

                };

                <p>{JSON.stringfy(objeto)}</p>;

            Con JSON.stringfy(objeto) esto lo que hace es convertir el objeto a un string
            es así que el objeto lo podemos visualizar completo.

            Sin embargo, si yo deseo ver el objeto más acorde a su forma debo cambiar la 
            etiqueta <h1></h1> por una etiqueta <pre></pre>
            */}
            <h1>{saludo}</h1>
            <p>Texto: {texto}</p>
            <p>Numero: {num}</p>
            <p>Booleano: {booleana}</p>
            <p>Undefined: {indefinida}</p>
            <p>Arreglo: {arreglo}</p>
            <pre>Objeto: {JSON.stringify(objeto, null, 3)}</pre>
            <pre>Desglose objeto: {JSON.stringify(`${objeto.nombre} tiene ${objeto.edad} años`, null, 3)}</pre>
        </>
    );
};

export default PrimeraApp;