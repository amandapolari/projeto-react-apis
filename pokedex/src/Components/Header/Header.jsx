import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { goToPokedex, goToHome } from '../../routes/coordinator';

const Header = () => {
    const location = useLocation();
    const navegate = useNavigate();
    const pathname = location.pathname;
    const [isErrorPage, setIsErrorPage] = useState(false);

    useEffect(() => {
        pathname !== '/' && pathname !== '/pokedex' && pathname !== '/details'
            ? setIsErrorPage(true)
            : setIsErrorPage(false);
    }, [pathname]);

    const ShowButtonBack = () => {
        return (
            <ContainerButtonBack>
                <ImgBack src={images.back} alt="Imagem Back" />
                <ButtonBack
                    onClick={() => {
                        goToHome(navegate);
                    }}
                >
                    Todos Pokémons
                </ButtonBack>
            </ContainerButtonBack>
        );
    };

    const ShowButtonPokedex = () => {
        return (
            <ButtonPokedex
                onClick={() => {
                    goToPokedex(navegate);
                }}
            >
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
            {pathname === '/' ? ShowButtonPokedex() : ''}
            {pathname === '/pokedex' ? ShowButtonBack() : ''}
            {pathname === '/details' ? ShowButtonBack() : ''}
            {pathname === '/details' ? ShowDeleteFromPokedex() : ''}
            {isErrorPage ? ShowButtonBack() : ''}
        </ContainerHeader>
    );
};

export default Header;
