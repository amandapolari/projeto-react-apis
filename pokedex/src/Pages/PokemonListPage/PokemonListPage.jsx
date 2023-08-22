import React, { useEffect, useContext, useState } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    ContainerBtns,
    ContainerListCardPokemon,
    ContainerPokemonListPage,
    DivIconsBtns,
    TitlePageHome,
} from './PokemonListPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';
import useRequestData from '../../hooks/useRequestData';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const PokemonListPage = () => {
    const context = useContext(GlobalContext);
    const {
        listPokemonsHome,
        setListPokemonsHome,
        listPokemonsPokedex,
        updateList,
        setDataReceivedFromApi,
    } = context;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 21;
    const url = `pokemon?limit=${150}&offset=${0}`;
    const [data, isLoading, isError] = useRequestData(url);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (listPokemonsHome.length === 0 && !isLoading && !isError && data) {
            setListPokemonsHome(data);
            setDataReceivedFromApi(data);

            const calculatedTotalPages = Math.ceil(data.length / itemsPerPage);
            setTotalPages(calculatedTotalPages);
        } else {
            setListPokemonsHome(listPokemonsHome);
        }
    }, [
        data,
        isLoading,
        isError,
        setListPokemonsHome,
        setDataReceivedFromApi,
        listPokemonsPokedex,
        listPokemonsHome,
    ]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(
        startIndex + itemsPerPage,
        listPokemonsHome.length
    );
    const displayedPokemons = listPokemonsHome.slice(startIndex, endIndex);

    return (
        <>
            <Header />
            <ContainerPokemonListPage>
                <TitlePageHome>Todos os Pokémons</TitlePageHome>
                <ContainerListCardPokemon>
                    {isLoading ? (
                        <Loading />
                    ) : isError ? (
                        <Error />
                    ) : (
                        displayedPokemons.map((item, index) => {
                            return (
                                <PokemonCard
                                    key={index}
                                    id={
                                        item.url &&
                                        item.url.match(/\/(\d+)\//)[1]
                                    }
                                    name={item.name && item.name}
                                    updateList={updateList}
                                />
                            );
                        })
                    )}
                </ContainerListCardPokemon>
                <ContainerBtns>
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <DivIconsBtns>
                            <CiCircleChevLeft />
                        </DivIconsBtns>
                    </button>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <DivIconsBtns>
                            <CiCircleChevRight />
                        </DivIconsBtns>
                    </button>
                </ContainerBtns>
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
