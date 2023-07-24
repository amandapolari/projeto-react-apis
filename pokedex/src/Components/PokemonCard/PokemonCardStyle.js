import styled from 'styled-components';

export const ContainerPokemonCard = styled.div`
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr;
    height: 25vh;
    width: 20vh;
    border: 1px solid lightslategray;
    background-color: lightsalmon;
    margin-bottom: 1vh;
    justify-content: center;
`;

export const ParagraphPokemonId = styled.p`
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    margin: 0;
`;

export const NamePokemon = styled.p`
    margin: 0;
    display: grid;
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const ImgPokemons = styled.img`
    height: 15vh;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
`;

export const ContainerButtonPokemonCard = styled.div`
    display: grid;
    grid-row: 4 / 5;
    grid-column: 1 / 3;
    align-items: flex-end;
`;

export const ButtonDetailPokemonCard = styled.button`
    grid-column: 1 / 2;
`;

export const ButtonAddPokemonCard = styled.button`
    grid-column: 2 / 3;
`;
