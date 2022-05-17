import {retornaArreglo} from '../../base_prueba/08-desestructuracion_arreglos';

describe('Evaluar archivo desestructuración de arreglos', () => {
    test('Evaluar la función retornaArreglo', () => {
        // Arrange
        const arrayTest = [ 'ABC', 123 ];
        // Act
        const [letters, numbers] = retornaArreglo();
        // Assert
        expect( letters ).toEqual(arrayTest[0]);
        expect( typeof letters ).toEqual('string');
        
        expect( numbers ).toEqual(arrayTest[1]);
        expect( typeof numbers ).toEqual('number');

    });
});