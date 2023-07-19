import React from 'react';
import images from '../../assets/importImages';
import { ImgLoading } from '../Loading/LoadingStyle';

const Loading = () => {
    return (
        <div>
            <ImgLoading src={images.loading} alt="imagem de loading" />
            <p>CARREGANDO..</p>
        </div>
    );
};

export default Loading;