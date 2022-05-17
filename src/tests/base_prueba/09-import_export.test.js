import {getHeroById, getHeroByOwner} from '../../base_prueba/09-import_export';
import h from "../../data/heroes";

describe ('Prueba en funciones que describen heroes', () => {
    test('Prueba función del ID del heroe', () => {
        // Arrange
        const id = 2;
        // Act
        const heroes = getHeroById(id);
        const heroe = h.find(h => h.id === id);
        // Assert
        expect( heroes ).toEqual( heroe );
    });

    test('Prueba función del ID del heroe cuando no existe', () => {
        // Arrange
        const id = 12;
        // Act
        const heroesById = getHeroById(id);
        // Assert
        expect( heroesById ).toBe( undefined );
    });

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const ownerTest = 'DC';
        
        const heroesDC = getHeroByOwner(ownerTest);
        const heroesDCFilter = h.filter( h => h.owner === ownerTest );
        
        expect (heroesDC).toEqual(heroesDCFilter);
        console.log(heroesDC);
    });

    test('Debe retornar la cantidad de heroes de Marvel', () => {
        const ownerTest = 'Marvel';
        
        const heroesMarvel = getHeroByOwner(ownerTest);
        const cantHeroesMarvel = heroesMarvel.length;
        
        expect (cantHeroesMarvel).toBe(2);
        console.log(cantHeroesMarvel);
    });
});