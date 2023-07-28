import styled from 'styled-components';

export const ContainerPokemonDetailPage = styled.div`
    height: 86vh;
    background-color: lightseagreen;
    font-size: 2vh;
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
    grid-template: 1fr 1fr 1fr 1fr / 1fr 1fr 1fr;
    gap: 2vh;
`;

export const ContainerImgFront = styled.div`
    display: grid;
    /* border: 1px solid black; */
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    align-items: center;
    justify-content: center;
    height: 30vh;
`;

export const ContainerImgBack = styled.div`
    display: grid;
    /* border: 1px solid black; */
    grid-column: 1 / 2;
    grid-row: 3 / 5;
    align-items: center;
    justify-content: center;
    height: 30vh;
`;

export const ContainerImgs = styled.img`
    height: 15vh;
`;

export const ContainerStats = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 5;
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    max-height: 70.5vh;
    overflow-y: auto;
    /* border: 1px solid black; */
`;

export const ContainerStat = styled.div`
    /* border: 1px solid black; */
    /* display: grid;
    align-items: flex-end; */
`;

export const ContainerValueStat = styled.div`
    /* border: 1px solid black; */
`;

export const Stat = styled.p`
    /* border: 1px solid black; */
    /* width: auto; */
`;

export const StatValue = styled.p`
    /* border: 1px solid red; */
`;

export const ContainerImgMain = styled.div`
    /* border: 1px solid red; */
    grid-column: 3 / 4;
    grid-row: 1 / 2;
`;
export const ImgMain = styled.img`
    height: 22vh;
`;

export const ContainerTypes = styled.div`
    /* border: 1px solid black; */
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    display: flex;
    justify-content: space-around;
    padding: 2.5vh;
`;

export const ContainerMoves = styled.div`
    display: grid;
    /* border: 1px solid black; */
    grid-column: 3 / 4;
    grid-row: 3 / 5;
    padding: 2.5vh;
    max-height: 20vh; /* Defina a altura máxima aqui */
    overflow-y: auto; /* Adicionado para exibir a barra de rolagem */
`;
