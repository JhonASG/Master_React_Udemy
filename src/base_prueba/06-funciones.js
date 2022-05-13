//Funciones
/*Para este caso es recomendable definir las funciones en variables (constantes), como se ve a continuación

    const saludar = function(nombre){
        return `Hola ${nombre}`;
    }

    console.log(saludar("Jhon Sossa"));

Las funciones de flecha o lambda se declaran de la siguiente manera:

    const saludar2 = (nombre) => {
        return `Hola ${nombre}`
    }

    console.log(saludar2("Goku"));

Ahora si solo la función tiene un return se puede declarar de la función flecha de una forma más simple

    const saludar3 = (nombre) => `Hola ${nombre}`;

Dentro de la funciones podemos en el "return" retornar un objeto que estará dentro {}

Tener en cuenta que al retornar objetos mediante una función flecha en su forma simple es necesario encerrar
el objeto dentro de parentesis ({}), de esta manera JS sabe que lo {} no indican el cuerpo de la función sino
que son un objeto que se debe retornar.
*/

const saludar = function(nombre){
    return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
    return `Hola ${nombre}`
};

const saludar3 = (nombre) => `Hola ${nombre}`;

const saludar4 = () => `Hola mundo`;

const getUser = () =>(
    {
        id:778,
        username:"Jasoga66"
    }
);

console.log(saludar("Gohan"));
console.log(saludar2("Goku"));
console.log(saludar3("Veggeta"));
console.log(saludar4());
console.log(getUser());

/*Tarea

    function getUsuarioActivo(nombre){
        return{
            uid: "ABC567",
            username: nombre
        }
    };

1. Transformar la función a una función de flecha
2. La función tiene que retornar un objeto implicito
3. Pruebas*/

const UserON = (nombre) => ({
    uid: "ABC567",
    username: nombre
});

console.log(UserON("Thorin"));