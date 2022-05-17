import heroes from "../data/heroes";

export const getHeroById = (ID) => {
    return heroes.find( heroe => (heroe.id === ID));
};

export const getHeroByOwner = (Owner) => {
    return heroes.filter( heroe => (heroe.owner === Owner));
};