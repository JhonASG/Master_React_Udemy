/*Async - Await

El async se utiliza para convertir el retorno de una función en una promesa
El await nos permite trabajar el código como si este fuera sincrono
Para trabajar con await estos deben estar dentro de una función async()

Para identificar errores o actuar cuando surja un error se utiliza el try - catch

    try{

    }catch(error){
        
    }
*/

const getImagen = async() =>{
    try{
        const apiKey = 's8pfdcu3bvzLYMHyudHP7MXQbG4lV6k2';
        //fetch retorna una promesa que resuelve una response
        //El await lo que hace es indicar que espere la respuesta de la petición antes de seguir ejecutando el código
        //Esta convirtiendo en sincrona la petición
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await peticion.json()
        const {url} = data.images.original;

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    }catch(e){
        console.error(e);
    }
};

getImagen();