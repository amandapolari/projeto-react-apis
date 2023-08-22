import styled from 'styled-components';
import images from '../../assets/importImages';

export const ContainerPokemonDetailPage = styled.div`
    background-color: #5e5e5e;
    font-family: 'Poppins', cursive;
    color: #ffffff;
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: url(${images.pokeball});
    background-size: 90vh;
    background-position: 45% top;
    background-repeat: no-repeat;
    height: 85vh;
`;

export const NamePageDetails = styled.h1`
    color: #fff;
    font-family: Poppins;
    font-size: 48px;
    font-weight: 700;
    margin-top: 1vh;
    margin-bottom: -3vh;
    padding: 1vh;
`;

export const ContainerListCardDetails = styled.div`
    background-color: ${({ color }) => color};
    background-image: url(${images.pokeball});
    background-size: 90vh;
    background-repeat: no-repeat;
    background-position: top right;
    border-radius: 38px;
    display: grid;
    grid-template: 1fr 1fr 1fr 1fr / 0.9fr 1fr 1.2fr 0.8fr;
    height: 65vh;
    width: 95vw;
    padding: 2vh;
    gap: 2vh;
    color: black;
`;

export const ContainerMiniImages = styled.div`
    display: grid;
    grid-row: 1 / 5;
    grid-column: 1 / 2;
    justify-content: flex-end;
`;
export const ContainerImgFront = styled.div`
    display: grid;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    background-color: #ffff;
    justify-self: center;
    align-self: center;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 29vh;
    width: 29vh;
`;

export const ContainerImgBack = styled.div`
    display: grid;
    grid-row: 3 / 5;
    grid-column: 1 / 2;
    background-color: #ffff;
    justify-self: center;
    align-self: center;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    height: 29vh;
    width: 29vh;
`;

export const ContainerImgs = styled.img`
    height: 16vh;
`;

export const ContainerAllStats = styled.div`
    grid-row: 1 / 5;
    grid-column: 2 / 3;
    background-color: #fff;
    justify-self: center;
    align-self: center;
    height: 97.2%;
    max-height: 70.5vh;
    overflow-y: auto;
    font-size: 1.5vh;
    border-radius: 8px;
    gap: 1vh;
    padding: 3vh;
    width: 25vw;
    justify-content: center;
    align-items: center;
`;

export const ContainerValueAndStat = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 8px;
    display: grid;
    grid-template: auto / 0.5fr 2.8vh 1fr;
    background-color: #fff;
    grid-row: 1 / 5;
    grid-column: 2 / 3;
    max-height: 70.5vh;
    overflow-y: auto;
    font-size: 1.5vh;
    gap: 1vh;
    padding: 0.5vh;
    justify-content: center;
    align-items: center;
`;

export const TitleStats = styled.h2`
    color: #000;
    font-family: Inter;
    grid-column: 1 / 4;
    font-weight: 700;
    font-size: 3vh;
    justify-content: center;
    align-items: center;
    height: 5vh;
`;

export const Stat = styled.p`
    font-size: 1.2vh;
    text-transform: capitalize;
    text-align: end;
    padding-right: 1vh;
`;

export const StatValue = styled.p`
    display: grid;
    font-weight: 500;
    align-items: center;
    text-align: end;
`;

export const ContainerImgMain = styled.div`
    grid-column: 4 / 5;
`;

export const ImgMain = styled.img`
    height: 32vh;
    margin-top: -16vh;
    margin-left: -2vh;
`;

export const ContainerTypes = styled.div`
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    padding: 0.5vh;
`;

export const TitleMoves = styled.p`
    color: #000;
    font-family: Inter;
    display: grid;
    font-weight: 700;
    font-size: 3vh;
    align-items: center;
    height: 5vh;
`;

export const Move = styled.p`
    margin: 0.1vh;
    padding: 1vh;
    width: fit-content;
    border-radius: 12px;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    background: #ececec;
    color: #000;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const IdDetails = styled.p`
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
`;

export const NameDetails = styled.p`
    color: #fff;
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
`;

export const ImgTypeDetails = styled.img`
    display: flex;
    padding: 5px 2px;
    align-items: flex-start;
    gap: 7px;
`;

export const ContainerImgTypeDetails = styled.div`
    display: flex;
`;

export const ContainerMoves = styled.div`
    display: grid;
    grid-column: 3 / 4;
    grid-row: 2 / 5;
    width: 80%;
    height: 97.7%;
    justify-self: flex-start;
    border-radius: 8px;
    background-color: #fff;
    overflow-y: auto;
    font-size: 1.3vh;
    gap: 1vh;
    padding: 2vh;
`;
