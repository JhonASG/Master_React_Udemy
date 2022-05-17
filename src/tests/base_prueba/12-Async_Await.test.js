import { getImagen } from "../../base_prueba/12-Async_Await";

describe('first', () => {
    test('Debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
        console.log(url);
    });
});