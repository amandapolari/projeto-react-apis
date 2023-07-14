import React from 'react';
import images from '../../assets/importImages';
import Header from '../../Components/Header/Header';
import {
    ContainerErrorPage,
    GifImage,
    GifImageContainer,
    TituloError,
} from './ErrorPageStyle';

const ErrorPage = () => {
    return (
        <>
            <Header />
            <ContainerErrorPage>
                <TituloError>Desculpa, não encontrei a sua página!</TituloError>
                <GifImageContainer>
                    <GifImage src={images.pikachu} />
                </GifImageContainer>
            </ContainerErrorPage>
        </>
    );
};

export default ErrorPage;
