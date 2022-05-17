import {getHeroById} from "../base_prueba/09-import_export";

export const getHeroByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const heroe = getHeroById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject(`No se pudo encontrar el heroe con ID: ${id}.`);
            }
        }, 1500);
    });
};