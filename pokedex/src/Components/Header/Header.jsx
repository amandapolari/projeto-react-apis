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
import VerticallyCenter from '../Modal/VerticallyCenter';

const Header = () => {
    const location = useLocation();
    const navegate = useNavigate();
    const pathname = location.pathname;
    const params = useParams();
    const name = params.name;
    const [isErrorPage, setIsErrorPage] = useState(false);
    const context = useContext(GlobalContext);
    const {
        listPokemonsPokedex,
        removeItemPokedex,
        updateList,
        showButtonAdd,
        setShowButtonAdd,
        showButtonDelete,
        setShowButtonDelete,
        showModal,
    } = context;

    const [isDetailsPage, setIsDetailsPage] = useState(name);

    const handleAddToPokedex = () => {
        updateList(name);
        setIsDetailsPage(name);
    };

    const handleRemoveFromPokedex = () => {
        removeItemPokedex(name);
        setIsDetailsPage(name);
    };

    useEffect(() => {
        if (isDetailsPage && name) {
            const isPresent = listPokemonsPokedex.some((item) =>
                item.some((i) => i.name === name)
            );
            setShowButtonDelete(isPresent);
            setShowButtonAdd(!isPresent);
        }
    }, [isDetailsPage, name, listPokemonsPokedex]);

    useEffect(() => {
        if (isDetailsPage === undefined) {
            setShowButtonDelete(false);
            setShowButtonAdd(false);
        }
        setIsDetailsPage(name);
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
        return (
            <DeleteFromPokedex
                onClick={() => {
                    handleRemoveFromPokedex();
                }}
            >
                Excluir da Pokédex
            </DeleteFromPokedex>
        );
    };

    const ShowAddFromPokedex = () => {
        return (
            <ButtonPokedex
                onClick={() => {
                    handleAddToPokedex();
                }}
            >
                Adicionar a Pokedex
            </ButtonPokedex>
        );
    };

    return (
        <ContainerHeader>
            <ImgLogo src={images.logo} alt="Imagem Logo" />
            {pathname === '/' ? ShowButtonPokedex() : ''}
            {pathname === '/pokedex' ? ShowButtonBack() : ''}
            {pathname === '/details' ? ShowButtonBack() : ''}
            {isErrorPage ? ShowButtonBack() : ''}
            {showButtonDelete ? ShowDeleteFromPokedex() : ''}
            {showButtonAdd ? ShowAddFromPokedex() : ''}
            {showModal && <VerticallyCenter />}
        </ContainerHeader>
    );
};

export default Header;
