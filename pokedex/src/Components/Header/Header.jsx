/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
    const params = useParams();
    const name = params.name;
    const [isErrorPage, setIsErrorPage] = useState(false);
    const [showButtonAdd, setShowButtonAdd] = useState(true);
    const context = useContext(GlobalContext);
    const { presentInPokedex, listPokemonsPokedex, setPresentInPokedex } =
        context;

    useEffect(() => {
        if (name && listPokemonsPokedex.length > 0) {
            const namesPokemonsPokedex = listPokemonsPokedex.flatMap((item) =>
                item.map((i) => i)
            );
            const filteredData = namesPokemonsPokedex.filter((item) =>
                name.includes(item.name)
            );
            if (filteredData.length) {
                setPresentInPokedex(true);
                setShowButtonAdd(false);
            }
        }
    }, [listPokemonsPokedex]);

    useEffect(() => {
        if (name === undefined) {
            setPresentInPokedex(false);
            setShowButtonAdd(false);
        }
    }, []);

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

    const ShowAddFromPokedex = () => {
        return <button>Adicionar a Pokedex</button>;
    };

    return (
        <ContainerHeader>
            <ImgLogo src={images.logo} alt="Imagem Logo" />
            {pathname === '/' ? ShowButtonPokedex() : ''}
            {pathname === '/pokedex' ? ShowButtonBack() : ''}
            {pathname === '/details' ? ShowButtonBack() : ''}
            {presentInPokedex ? ShowDeleteFromPokedex() : ''}
            {isErrorPage ? ShowButtonBack() : ''}
            {showButtonAdd ? ShowAddFromPokedex() : ''}
        </ContainerHeader>
    );
};

export default Header;
