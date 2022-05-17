import { getUser, UserON } from "../../base_prueba/06-funciones";

describe('Evaluar el archivo de funciones', () => {
    test('Evaluamos la función getUser', () => {
        // Arrange -> Inicialización o con lo cual vamos a evaluar el archivo
        const dataUser = {
            id: 778,
            username: "Jasoga66"
        }
        // Act -> Accionar o el tener lo que nos entrega la función a evaluar
        const user = getUser();
        // Assert -> Afirmación de comparar el Arrange con el Act
        /* Para evaluar objetos utilizamos toEqual() ya que al almacenar espacios de memoria distintos
        necesitan una evaluación de igualdad más profunda que la que hace toBe().*/
        expect( user ).toEqual( dataUser );
    });

    // La función UserON evaluarlo y debe retornar un objeto
    test('Evaluamos la función UserON', () => {
        // Arrange
        const nombre = 'Jhon Alexander';
        const dataUserOn = {
            uid: "ABC567",
            username: nombre
        }
        // Act
        const getUserOn = UserON(nombre);
        // Assert
        expect( getUserOn ).toEqual( dataUserOn );
    });
});