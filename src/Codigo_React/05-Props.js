//Manera rapida de importar react -> imr enter
import React from 'react';

//Functional component -> primer componente con nombre PrimeraApp
const PrimeraApp = ({new_text, saludo})=>{
    /*Comunicación entre componentes - Props

    Las propiedades que son enviadas a los componentes se conocen como 'Properties'
    abreviado en JavaScript como Props.

    Es decir cada componente tiene una propiedades que recibe del padre, en este caso
    del archivo .js que se encarga de manipular o utilizar el componente para la aplicación,
    es así que podemos enviarles información desde el archivo padre a cada componente.    
    
    Entonces para recibir una propiedad del elemento padre en el componente ponemos como argumento
    del componente props.

        const componente = (props) => {
            //Code here.
        };
    
    Ahora bien usar este argumento que recibimos el cual es una propiedad del componente se hace de
    igual forma que un objeto.

    Como la propiedad que se recibe mediante el componente es un objeto podemos acceder a cada uno de sus
    elementos con una desestructuración del objeto, así
        
        const {new_text} = props;
    
    Sin embargo, lo que se usa hoy en día es que el argumento que se reciba se desestructure ahí, para no tener
    que crear una constante para desestructura el objeto que se recibe.

        const componente = ({nombre_propiedad_objeto}) => {
            //Code here.
        };
    
    Luego podemos hacer que los demás desarrolladores manipulen mis componentes tal cual como yo deseo que lo hagan
    para ello luego se verán como hacer estas validaciones y establecer estas reglas de manipulación.
    */

    //JSX para las etiquetas HTML
    //const saludo = 'Hello world!!!';
    const texto = 'My first application';
    const num = 1+2;
    //Los booleanas no se van a imprimir en una etiqueta HTML
    const booleana = false;
    const arreglo = [1,2,3,4,5]
    const objeto = {
        nombre: "Jhon Sossa",
        edad: 23
    };

    return (
        //Fragment
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