export const getImagen = async() =>{
    try{
        const apiKey = 'S5Tauh8suBIUNhw70tSFxiVwgMqRy6Mn';
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await peticion.json()
        const {url} = data.images.original;

        return url;
    }catch(e){
        return 'No existe';
    }
};