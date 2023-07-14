import styled from 'styled-components';

export const ContainerPokemonDetailPage = styled.div`
    height: 86vh;
    background-color: lightseagreen;
`;

export const ContainerNameAndButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1vh;
`;

export const NamePageDetails = styled.p`
    margin: 0;
    padding: 1vh;
`;

export const ContainerListCardDetails = styled.div`
    padding: 2.5vh 20vh 2vh 20vh;
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
