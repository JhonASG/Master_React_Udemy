/*Desestructuración de arreglos o asignación desestructurante de arreglos

Arreglo

const personajes = ["Goku", "Vegeta", "Trunks"];

Para realizar la desestructuración de un arreglo se realiza de la siguiente manera:

const [Personaje1, Personaje2, Personaje3] = personajes;

Tenemos que personajes es el arreglo que se ha definido, para yo acceder a cada elemento del arreglo sin la
necesidad de indicar el número de índice debo realizar una desestructuración del arreglo, para ello simplemente
cada nombre que indiquemos en los [] antes del igual tomaro como valor cada elemento respectivamente, es decir,
Personaje1 toma el valor del primer elemento en este caso "Goku" y así sucesivamente.

Al resaltar un nombre y dar F2 se abre un recuadro para reemplazarlo por el nuevo nombre y automaticamente hace
el cambio de nombre en todos los lugares

Si se deja un espacio vacio antes de una coma lo toma como que ese respectivo valor no se necesita

const [, Personaje2, Personaje3] = personajes;
*/

const personajes = ["Goku", "Vegeta", "Trunks"];

const [Goku, Gohan, Trunks] = personajes;

console.log(`Hola soy ${Goku}, este es mi hijo ${Gohan} y este muchacho es ${Trunks} el hijo de Vegetta`);

//Ejemplo de desestructuración desde el retorno de un objeto en una función

const retornaArreglo = () => {return ["ABC", 123]};

const [letter, number] = retornaArreglo();

console.log(letter, number);

//Tarea

const userState = (valor) =>{
    return [
        valor, () => {console.log("Hola mundo!")}
    ]
};

const [nombre, setNombre] = userState("Jhon");

console.log(nombre);
setNombre();

//Cuando deseo una función que aunque tenga parametros no los exija

function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25}={}) {
  console.log(size, coords, radius);
  // haz un dibujo de gráfico
}

drawChart({
  coords: {x: 18, y: 30},
  radius: 30
});