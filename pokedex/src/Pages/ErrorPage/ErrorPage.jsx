import React from 'react';
import images from '../../assets/importImages';
import Header from '../../Components/Header/Header';
import {
    ContainerErrorPage,
    GifImage,
    GifImageContainer,
    TituloError,
} from './ErrorPageStyle';
import Error from '../../Components/Error/Error';

const ErrorPage = () => {
    return (
        <>
            <Header />
            {/* <ContainerErrorPage>
                <TituloError>Desculpa, não encontrei a sua página!</TituloError>
                <GifImageContainer>
                    <GifImage src={images.pikachu} />
                </GifImageContainer>
            </ContainerErrorPage> */}
            <Error />
        </>
    );
};

export default ErrorPage;
