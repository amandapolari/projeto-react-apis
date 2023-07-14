import React from 'react';
import {
    ButtonBack,
    ButtonPokedex,
    ContainerButtonBack,
    ContainerHeader,
    DeleteFromPokedex,
    ImgBack,
    ImgLogo,
} from './HeaderStyle';
import images from '../../assets/importImages';

const Header = ({
    controlStateShowAllPokemons,
    controlStateShowDetail,
    presentationChangeForPokedex,
    presentationChangeForAllPokemons,
}) => {
    const ShowButtonBack = () => {
        return (
            <ContainerButtonBack>
                <ImgBack src={images.back} alt="Imagem Back" />
                <ButtonBack onClick={presentationChangeForAllPokemons}>
                    Todos Pokémons
                </ButtonBack>
            </ContainerButtonBack>
        );
    };

    const ShowButtonPokedex = () => {
        return (
            <ButtonPokedex onClick={presentationChangeForPokedex}>
                Pokédex
            </ButtonPokedex>
        );
    };

    const ShowDeleteFromPokedex = () => {
        return <DeleteFromPokedex>Excluir da Pokédex</DeleteFromPokedex>;
    };

    return (
        <ContainerHeader>
            <ImgLogo src={images.logo} alt="Imagem Logo" />
            {controlStateShowAllPokemons
                ? ShowButtonPokedex()
                : ShowButtonBack()}
            {controlStateShowDetail ? ShowDeleteFromPokedex() : ''}
        </ContainerHeader>
    );
};

export default Header;
