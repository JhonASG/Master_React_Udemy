describe('Descriptor de pruebas', () => {
    test ('first test', () => {
        // Inicialización -> Arrange
        const mensaje1 = 'Hola Mundo';
        // Estimulo -> Act
        const mensaje2 = `Hola Mundo`;
        // Observar el comportamiento -> Assert
        /* Con expect(mensaje1).toBe(mensaje2); estamos comparando el mensaje 1 con el mensaje 2 y mirando 
        si son iguales*/
        // Mirar la documentación de JEST para mirar las funcionalidades para hacer las pruebas
        expect(mensaje1).toBe(mensaje2);
    });
});