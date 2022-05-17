/*
Al archivo que se le van a realizar las pruebas es necesario que no tengan console.log() ejecutandose
para evitar ruido o basura en las pruebas

Toda función que deseemos validar en el archivo.test debemos exportarla para poder importarla en el
arvhivo de evaluación

El archivo.test que genere del archivo a evaluar debe estar como en una ruta parecidad es decir si el
archivo a evaluar esta dentro de cierta carpeta, entonces en la carpeta test debería crear una carpeta
con el mismo nombre y con el archivo.test que evaluara el archivo original.
*/

// Se importa el método, función que se va a evaluar del archivo a analizar
import {get_saludo} from '../../base_prueba/03-template_string';

describe('Prueba archivo template_string', () => {
    // con test() estamos evaluando dicho método o función
    test('El método get_saludo debe retornar Hola Jhon', () => {
        // Arrange -> Inicializamos
        const nombre = 'Jhon';
        const edad = 23;
        // Act -> Actuamos o Accionamos
        const saludo = get_saludo(nombre, edad);
        // Assert -> Afirmamos [saludo es lo que recibimos y lo que hay después de toBe() es lo que esperamos]
        expect( saludo ).toBe(`Hola soy ${nombre}, yo tengo ${edad} años.`);
    });

    // Prueba para cuando get_saludo() no reciba un nombre por argumento
    test('El método get_saludo no recibe parametro nombre', () => {
        // Arrange -> Inicializamos
        const edad = 34;
        //Act -> Accionamos
        const salute = get_saludo(undefined, edad);
        // Assert
        expect( salute ).toBe(`Hola soy Alexander, yo tengo ${edad} años.`);
    });
});