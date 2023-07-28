import React from 'react';
import images from '../../assets/importImages';
import {
    ContainerError,
    GifContainer,
    ImgError,
    TituloMainError,
} from '../Error/ErrorStyle';

const Error = () => {
    return (
        <ContainerError>
            <TituloMainError>
                Desculpa, não encontrei a sua página!
            </TituloMainError>
            <GifContainer>
                <ImgError src={images.pikachu} alt="imagem de error" />
            </GifContainer>
        </ContainerError>
    );
};

export default Error;
