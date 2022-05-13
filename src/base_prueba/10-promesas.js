/*Promesas

Las promesas son asincronas por lo cual se ejecutan después de todo el código sincrono, para su declaración es

const name_variable = new Promise(callback);

la promesa recibe una función callback que tiene dos argumentos resolve y reject, donde resolve es otra función
callback que se ejecuta cuando la promesa es exitosa y el reject se ejecuta cuando la promesa falla o algo no se
puede cumplir

Cuando se genera una promesa se cuenta con tres metodos importantes.

-> then(): me indica cuando la promesa se cumplio correctamente
-> catch(): me indica cuando la promesa genero un error y no se pudo cumplir
-> finally(): se ejecuta siempre después del then() y del catch().

Ahora bien como funciona, yo dentro de los () del then() ejecuto una función callback que contiene un código
cualquiera para ejecutar el código de la función callback del then() simplemente dentro de la función callback
de new Promise() debo llamar a resolve así resolve().

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(); //Con esto ejecutamos la función callback del método then().
        }, 2000);
    });

    promesa.then(()=>{
        console.log("Then de la promesa");
    });

-> Para yo enviar un argumento a la función callback del método then(), simplemente dentro de los () del resolve()
indico el argumento a enviar y dicho argumento es el que recibe la función callback del método then().

Utilizando el resolve():

    import getHeroById, {getHeroByOwner} from "./bases/09-import_export";

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            //Tarea:
            //Importar de la clase anterior la función getHeroById() e imprimir lo que entrega la función getHeroById().
            
            const heroe = getHeroById(2);
            const heroe_owners = getHeroByOwner("DC");
            resolve(heroe);
        }, 2000);
    });

    promesa.then((heroe)=>{
        console.log(`Then de la promesa tiene como heroe a ${heroe.name}`);
    });

Utilizando reject():

    import getHeroById, {getHeroByOwner} from "./bases/09-import_export";

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            //Tarea:
                //Importar de la clase anterior la función getHeroById() e imprimir lo que entrega la función getHeroById().
            const heroe = getHeroById(2);
            const heroe_owners = getHeroByOwner("DC");
            reject("No se pudo encontrar el heroe");
        }, 2000);
    });

    promesa.then((heroe)=>{
        console.log(`Then de la promesa tiene como heroe a ${heroe.name}`);
    }).catch((err) =>{
        console.warn(err);
    });
*/

import getHeroById from "../bases/09-import_export";
import heroes from "../data/heroes";

const getHeroByIdAsync = (id) =>{
    //Al retornar la promesa la función getHeroByIdAsync puede utilizar los métodos then(), catch() and finally().
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            /* Forma de resolverlo del profesor
            const heroe = getHeroById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject(`No se pudo encontrar el heroe con ID: ${id}.`);
            }
            */
            //Forma mía de resolverlo
            if(id <= heroes.length){
                const heroe = getHeroById(id);
                resolve(heroe);
            }else{
                reject(`No se pudo encontrar el heroe con ID: ${id}.`);
            }
        }, 2000);
    });
};

/*Como console.warn es una función simplemente si lo coloco así el toma el primer parametro pasado al catch desde el reject, lo mismo
pasa con el console.log, veamos la forma de imprimir*/

getHeroByIdAsync(2).then(console.log).catch(console.warn);