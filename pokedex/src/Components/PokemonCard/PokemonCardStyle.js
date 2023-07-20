import styled from 'styled-components';

export const ContainerPokemonCard = styled.div`
    display: grid;
    grid-template: 2fr 1fr 1fr / 1fr 1fr;
    height: 25vh;
    width: 20vh;
    border: 1px solid lightslategray;
    background-color: lightsalmon;
    margin-bottom: 1vh;
    justify-content: center;
`;

export const NamePokemonCard = styled.p`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const NamePokemon = styled.p`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const ContainerButtonPokemonCard = styled.div`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    align-items: flex-end;
`;

export const ButtonDetailPokemonCard = styled.button`
    grid-column: 1 / 2;
`;

export const ButtonAddPokemonCard = styled.button`
    grid-column: 2 / 3;
`;

export const ImgPokemons = styled.img`
    height: 15vh;
    grid-column: 1 / 3;
`;
