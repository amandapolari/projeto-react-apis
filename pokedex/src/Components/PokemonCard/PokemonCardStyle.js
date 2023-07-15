import styled from 'styled-components';

export const ContainerPokemonCard = styled.div`
    display: grid;
    grid-template: 2fr 1fr / 1fr 1fr;
    height: 25vh;
    width: 20vh;
    border: 1px solid lightslategray;
    background-color: lightsalmon;
`;

export const NamePokemonCard = styled.p`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const ContainerButtonPokemonCard = styled.div`
    display: grid;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    align-items: flex-end;
`;

export const ButtonDetailPokemonCard = styled.button`
    grid-column: 1 / 2;
`;

export const ButtonAddPokemonCard = styled.button`
    grid-column: 2 / 3;
`;
