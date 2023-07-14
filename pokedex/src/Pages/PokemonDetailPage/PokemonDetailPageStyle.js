import styled from 'styled-components';

export const ContainerPokemonDetailPage = styled.div`
    padding: 1vh;
    border: 1px solid lightslategray;
    margin: 0.1vh;
    background-color: lightseagreen;
`;

export const ContainerListCardDetails = styled.div`
    padding: 2.5vh 20vh 20vh 20vh;
    height: 72vh;
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr 1.2fr;
    gap: 6vh;
`;

export const ContainerImgFront = styled.div`
    display: grid;
    border: 1px solid black;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    align-items: center;
    justify-content: center;
`;

export const ContainerImgBack = styled.div`
    display: grid;
    border: 1px solid black;
    grid-column: 1 / 2;
    grid-row: 3 / 5;
    align-items: center;
    justify-content: center;
`;

export const ContainerStats = styled.div`
    display: grid;
    border: 1px solid black;
    grid-column: 2 / 3;
    grid-row: 1 / 5;
    padding: 2.5vh;
`;

export const ContainerTypes = styled.div`
    display: grid;
    border: 1px solid black;
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    display: flex;
    justify-content: space-around;
    padding: 2.5vh;
`;

export const ContainerMoves = styled.div`
    display: grid;
    border: 1px solid black;
    grid-column: 3 / 4;
    grid-row: 2 / 5;
    padding: 2.5vh;
`;
