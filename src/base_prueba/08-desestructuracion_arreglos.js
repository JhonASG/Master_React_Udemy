// const personajes = ["Goku", "Vegeta", "Trunks"];

export const retornaArreglo = () => {
  return ["ABC", 123];
};

export const useState = (valor) =>{
    return [
        valor, () => {console.log("Hola mundo!")}
    ]
};