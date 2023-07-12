import React from 'react';
import { ContainerHeader } from './HeaderStyle';
import images from '../../assets/importImages';

const Header = () => {
    return (
        <ContainerHeader>
            <img src={images.image1} alt="Imagem 1" />
            <p>HEADER</p>
        </ContainerHeader>
    );
};

export default Header;
