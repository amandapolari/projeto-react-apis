import styled from 'styled-components';

export const ContainerHeader = styled.div`
    padding: 2vh 5vh;
    background-color: #ffffff;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 15vh;
`;

export const ContainerButtonBack = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
`;

export const ImgBack = styled.img`
    height: 3vh;
`;

export const ButtonBack = styled.button`
    border: none;
    background: none;
    color: #1a1a1a;
    font-family: Poppins;
    font-size: 2.5vh;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
`;

export const ImgLogo = styled.img`
    height: 10vh;
    grid-column: 2 / 3;
    justify-self: center;
`;

export const ButtonPokedex = styled.button`
    grid-column: 3 / 4;
    border: none;
    color: #fff;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 2.3vh;
    height: 7vh;
    border-radius: 8px;
    background: #33a4f5;
    padding: 1vh 6vh;
    margin-left: auto;
    align-items: center;
`;

export const DeleteFromPokedex = styled.button`
    border: none;
    color: #fff;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 2.3vh;
    height: 7vh;
    border-radius: 8px;
    background: #ff6262;
    padding: 1vh 3vh;
    margin-left: auto;
    justify-content: center;
    align-items: center;
`;
