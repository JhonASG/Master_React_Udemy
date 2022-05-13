/*Desestructuración de objetos o asignación desestructurante

La desustructuración de un objeto lo que me permite es yo poder extrar la información de los elementos de un
objeto y guardarlos en una variable, es decir, ya cuando necesite un elemento del objeto no es necesario indicar
el nombre del objeto punto el nombre de la clave del elemento que quiero extraer sino que ya simplemente indicamos
el nombre de la variable a la que le hemos designado el valor de ese objeto.

Ejemplo:

-> si tengo el siguiente objeto

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron man"
};

-> si deseo estaer el elemento con clave nombre tradicionalmente se hace de la siguiente manera

persona.nombre

-> pero utilizando desestructuración de objetos podemos invocar dicho elemento así [const {clave} = objeto;]

const {nombre} = persona; -> extraigame en esta variable lo que contiene la clave nombre en el objeto persona

nombre->Ahora solo con indicar nombre estamos accediendo al valor que tiene la clave nombre en el objeto persona

-> para extaer el resto de propiedades del objeto simplemente se paramos con coma cada propiedad, así

const {propiedad1, propiedad2, ..., propiedadn} = objeto;

La desestructuración también se puede hacer a través del argumento de una función, y es algo muy usado, a la
función se le pasa como argumento el objeto y en el argumento agrego {} dentro de las llaves {} indico las
propiedades del objeto que necesito extraer para la función, observemos como sería

-> Tenemos el objeto

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron man"
};

-> Creamos la función desestructurando el objeto en su argumento

const printPersona = ({nombre, edad, clave}) => {
    console.log(nombre+" tiene "+edad+" años y es "+clave);
};

-> Por último le pasamos el objeto a la función
printPersona(persona);
*/

/*Primera parte 

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron man"
};

const {nombre, edad, clave} = persona;

console.log(nombre+" tiene "+edad+" años y es "+clave);
*/

/*Segunda Parte

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron man",
    rango: "soldado"
};

//Si rango no esta en el objeto toma el valor designado en el argumento, caso contrario toma el valor en el objeto
const printPersona = ({nombre, edad, clave, rango = "Capitan"}) => {
    console.log(nombre+" tiene "+edad+" años y es "+clave + ", él es mejor que el "+rango);
};

printPersona(persona);
*/


/*Tercera parte

Desestructuración del objeto avenger.

Acá vemos como podemos hacer una desustructuración de un objeto anidado dentro de otro objeto

Primera forma:

El objeto latlng le indicamos dos puntos, luego llaves {} y dentro de las llaves las propiedades a extraer
de dicho objeto anidado

const {hero, anios, latlng:{lat, lng}} = avenger;

Segunda forma:

Esta es más fácil de generar

-> Primero desestructuro el objeto padre o principal [avenger]

const {hero, anios, latlng} = avenger;

-> Luego desestructuramos el objeto anidado en este caso el objeto anidado es latlng

const {lat, lng} = latlng;
*/
const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron man",
    rango: "soldado"
};

const userContext = ({nombre, edad, clave, rango = "Capitan"}) => {
    return {
        hero: clave,
        anios: edad,
        latlng:{
            lat: 1445.5532432,
            lng: 1324.3241245
        }
    }
};

const avenger = userContext(persona);
const {hero, anios, latlng:{lat, lng}} = avenger;

console.log(`${hero} tiene ${anios} años. Él vive en una latitud de ${lat} con una longitud de ${lng}`);