import styled from 'styled-components';
import images from '../../assets/importImages';

export const ContainerPokemonCard = styled.div`
    display: grid;
    width: 440px;
    height: 210px;
    border-radius: 12px;
    justify-content: center;
    background-color: ${({ color }) => color};
    background-image: url(${images.pokeball});
    background-repeat: no-repeat;
    background-position: top right;
    padding: 2vh;
    margin: 3vh 3vh 6vh 3vh;
    grid-template: 1fr 1fr 1fr 2fr / 1fr 1fr;
`;

export const ParagraphPokemonId = styled.p`
    display: grid;
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`;

export const NamePokemon = styled.p`
    display: grid;
    color: #fff;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
`;

export const ContainerTypes = styled.div`
    display: flex;
    grid-row: 3 / 4;
    grid-column: 1 / 2;
`;

export const ImgType = styled.img`
    display: flex;
    padding: 5px 2px;
    align-items: flex-start;
    gap: 7px;
`;

export const ContainerImage = styled.div`
    display: grid;
    grid-row: 1 / 4;
    grid-column: 2 / 3;
`;

export const ImgPokemons = styled.img`
    width: 193px;
    height: 193px;
    margin-top: -80px;
    margin-left: 20px;
`;

export const ContainerButtonPokemonCard = styled.div`
    grid-row: 4 / 5;
    grid-column: 1 / 3;
    display: flex;
    align-items: end;
    justify-content: space-between;
`;
