// desc + tab snippet de describe()
// testblock + tab snippet de test()
import { getHeroByIdAsync } from "../../base_prueba/10-promesas";
import heroes from "../../data/heroes";

describe ("Pruebas con tareas asincronas", () => {
	test('Evaluar si el heroe con ID existe', ( done ) => {
		const id = 1;
		getHeroByIdAsync(id).then( heroe => {
			expect(heroe).toBe(heroes.find( h => (h.id === id)));
			done();
		});
	});
	test('Evaluar si el heroe con ID no existe', ( done ) => {
		const id = 13;
		getHeroByIdAsync(id).catch( heroeError => {
			console.log(heroeError);
			done();
		});
	});
});