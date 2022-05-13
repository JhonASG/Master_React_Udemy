/*Import, export y funciones comunes de arreglos

->Si se desea importar un archivo almacenado en cierta ruta, debemos hacerlo así:

import {} from "./ruta del archivo"

las llaves {} dentro de ellas se colocan exportaciones individuales

-> Para importar un elemento de un archivo que es exportado por defecto lo hacemos de la siguiente manera

import name_ref from "./ruta del archivo"

donde name_ref es el nombre de referencia con el cual vamos a utilizar o llamar el elemento importado desde una
exportación por defecto, notese que las llaves {} desaparecen, no es recomendable porque es visualmente dificil
*/

//Forma de importar
import heroes, {owners} from "../data/heroes"

//Utilizar find encuentra el primer elemento que cumple con la condición del callback
const getHeroById = (ID) => {
    return heroes.find( elem => (elem.id == ID));
};

//const {id, name, owner} = getHeroById(2);
//console.log(`ID: ${id} - Nombre: ${name} - Propiedad: ${owner}`);

//Utilizar filter para buscar todos los heroes que cumplan con la condición del callback
export const getHeroByOwner = (Owner) => {
    return heroes.filter( heroe => (heroe.owner == Owner));
};

//console.log(getHeroByOwner("DC"));
//console.log(owners);

export default getHeroById;