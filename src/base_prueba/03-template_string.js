//Templates strings
//Aconstumbrarse a leer los warnings

// const nombre = "Jhon";
// const apellido = "Sossa";

//Una concatenación tradicional se haría de la siguiente manera
//const nombreCompleto = nombre + " " + apellido;

//Para realizar una concatenación con template strings simplemente hacemos lo siguiente.
//En esta primera declaración escribe las dos variables en la misma linea
//const nombreCompleto = `${nombre} ${apellido}`;
//En esta segunda declaración genera un salto de linea entre las dos variables.
// const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

export function get_saludo(nombre = 'Alexander', edad){
    return `Hola soy ${nombre}, yo tengo ${edad} años.`;
}

// Llamaremos la función dentro de un template string

// console.log(`Este es un saludo: ${get_saludo(nombreCompleto)}`);