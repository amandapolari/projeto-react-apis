import React from 'react';
import {
    ButtonBack,
    ButtonPokedex,
    ContainerButtonBack,
    ContainerHeader,
    ImgBack,
    ImgLogo,
} from './HeaderStyle';
import images from '../../assets/importImages';

const Header = () => {
    return (
        <ContainerHeader>
            <ContainerButtonBack>
                <ImgBack src={images.back} alt="Imagem Back" />
                <ButtonBack>Todos Pokémons</ButtonBack>
            </ContainerButtonBack>
            <ImgLogo src={images.logo} alt="Imagem Logo" />
            <ButtonPokedex>Pokédex</ButtonPokedex>
        </ContainerHeader>
    );
};

export default Header;
