import React from 'react';
import images from '../../assets/importImages';
import { ImgError } from '../Error/ErrorStyle';

const Error = () => {
    return (
        <div>
            <ImgError src={images.pikachu} alt="imagem de error" />
        </div>
    );
};

export default Error;