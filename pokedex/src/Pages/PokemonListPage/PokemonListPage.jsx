/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState, useContext } from 'react';
import React, { useEffect, useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    // ContainerBtns,
    ContainerListCardPokemon,
    ContainerPokemonListPage,
    NamePageHome,
    TitlePageHome,
} from './PokemonListPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';
import useRequestData from '../../hooks/useRequestData';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';

const PokemonListPage = () => {
    const context = useContext(GlobalContext);
    const {
        listPokemonsHome,
        setListPokemonsHome,
        listPokemonsPokedex,
        updateList,
        setDataReceivedFromApi,
        isHomeSet,
    } = context;

    // PAGINAÇÃO - LÓGICA:
    //
    // => PAGINAÇÃO:
    // const [offset, setOffset] = useState(0);
    // const limitPerPage = 18;
    // const url = `pokemon?limit=${limitPerPage}&offset=${offset}`;
    // const [data, isLoading, isError] = useRequestData(url);
    // const loadNextPage = () => {
    //     setOffset((prevOffset) => prevOffset + limitPerPage);
    // };
    // const loadPreviousPage = () => {
    //     if (offset > 0) {
    //         setOffset((prevOffset) => prevOffset - limitPerPage);
    //     }
    // };
    // => SEM PAGINAÇÃO:
    // const url = `pokemon?limit=${limitPerPage}&offset=${offset}`;

    const [data, isLoading, isError] = useRequestData(
        'pokemon?limit=8&offset=0'
    );

    useEffect(() => {
        if (listPokemonsHome.length === 0 && data) {
            setListPokemonsHome(data);
            setDataReceivedFromApi(data);
        } else {
            setListPokemonsHome(listPokemonsHome);
        }
    }, [data, listPokemonsHome, listPokemonsPokedex, isHomeSet]);

    return (
        <>
            <Header />
            <ContainerPokemonListPage>
                <NamePageHome>[HOME] POKEMON LIST PAGE</NamePageHome>
                <TitlePageHome>Todos os Pokémons</TitlePageHome>
                <ContainerListCardPokemon>
                    {isLoading ? (
                        <Loading />
                    ) : isError ? (
                        <Error />
                    ) : (
                        listPokemonsHome.map((item, index) => {
                            // console.log('TUDO:', listPokemonsHome);
                            // console.log('ITEM:', item);
                            // console.log('INDEX:', index);
                            // console.log(
                            //     'Teste NAME: ',
                            //     listPokemonsHome[index].name
                            // );
                            // console.log(
                            //     'Teste URL: ',
                            //     listPokemonsHome[index].url
                            // );
                            // console.log(
                            //     'Teste ID: ',
                            //     item.url.match(/\/(\d+)\//)[1]
                            // );
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
                {/* PAGINAÇÃO - BTNS:
                <ContainerBtns>
                    <button onClick={loadPreviousPage} disabled={offset === 0}>
                        Página Anterior
                    </button>
                    <button onClick={loadNextPage}>Próxima Página</button>
                </ContainerBtns> */}
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
