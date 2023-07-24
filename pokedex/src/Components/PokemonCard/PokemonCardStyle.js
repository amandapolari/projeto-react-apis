import styled from 'styled-components';

export const ContainerPokemonCard = styled.div`
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr;
    height: 26vh;
    width: 20vh;
    border: 1px solid lightslategray;
    background-color: ${({ color }) => color};
    margin-bottom: 5vh;
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

export const ImgType = styled.img`
    height: 3vh;
    grid-row: 3 / 4;
    grid-column: 1 / 3;
`;

export const ContainerTypes = styled.div`
    display: flex;
    width: 100%;
    /* border: solid black 2px; */
    grid-row: 3 / 4;
    grid-column: 1 / 3;
`;

export const ImgPokemons = styled.img`
    height: 15vh;
    grid-row: 4 / 5;
    grid-column: 1 / 3;
`;

export const ContainerButtonPokemonCard = styled.div`
    display: grid;
    grid-row: 5 / 6;
    grid-column: 1 / 3;
    align-items: flex-end;
`;

export const ButtonDetailPokemonCard = styled.button`
    grid-column: 1 / 2;
`;

export const ButtonAddPokemonCard = styled.button`
    grid-column: 2 / 3;
`;
