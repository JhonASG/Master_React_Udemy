const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Iron man",
    rango: "Soldado"
};

const userContext = ({nombre, edad, clave, rango = "Capitan"}) => {
    return {
        name: nombre,
        hero: clave,
        anios: edad,
        range: rango,
        latlng:{
            lat: 1445.5532432,
            lng: 1324.3241245
        }
    }
};

console.log(userContext(persona));

// const avenger = userContext(persona);
// const {hero, anios, latlng:{lat, lng}} = avenger;