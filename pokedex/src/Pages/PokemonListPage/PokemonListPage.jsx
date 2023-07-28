import React, { useEffect, useState } from 'react';
import {
    ContainerBtns,
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
    // Capturando dados SEM PAGINAÇÃO:
    // const [data, isLoading, isError] = useRequestData(
    //     'pokemon?limit=100&offset=0'
    // );
    const [listNamesPokemons, setListNamesPokemons] = useState([]);
    const [listUrlsPokemons, setUrlsPokemons] = useState([]);
    const [listIdsPokemons, setListIdsPokemons] = useState([]);
    const [listPokemonsPokedex, setPokemonsPokedex] = useState([]);

    // [início] ----- Configs PAGINAÇÃO:
    const [offset, setOffset] = useState(0);
    const limitPerPage = 18; // Quantidade de pokémons por página!

    // Função para carregar a próxima página de pokémons
    const loadNextPage = () => {
        setOffset((prevOffset) => prevOffset + limitPerPage);
    };

    // Função para carregar a página anterior de pokémons
    const loadPreviousPage = () => {
        if (offset > 0) {
            setOffset((prevOffset) => prevOffset - limitPerPage);
        }
    };

    const url = `pokemon?limit=${limitPerPage}&offset=${offset}`;
    const [data, isLoading, isError] = useRequestData(url);

    useEffect(() => {
        setListNamesPokemons([]);
        setUrlsPokemons([]);
    }, [offset]);
    // [fim] ------- Configs PAGINAÇÃO:

    useEffect(() => {
        const urls = data.map((item) => item.url);
        urls.map((id) => {
            const number = id.split('/').slice(-2, -1)[0];
            setListIdsPokemons((prevList) => [...prevList, number]);
        });
        const names = data.map(
            (item) => item.name.charAt(0).toUpperCase() + item.name.slice(1)
        );
        setUrlsPokemons(urls);
        setListNamesPokemons(names);
    }, [data]);

    const addToPokedex = (pokemonName) => {
        const nameAdjusted = pokemonName.toLowerCase();
        setPokemonsPokedex((prevList) => [...prevList, nameAdjusted]);
    };

    const updateListNamesPokemons = (pokemonName) => {
        setListNamesPokemons((prevList) =>
            prevList.filter((item) => item !== pokemonName)
        );
    };

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
                        listNamesPokemons.map((pokemonName, index) => (
                            <PokemonCard
                                key={index}
                                id={listIdsPokemons[index]}
                                name={pokemonName}
                                url={listUrlsPokemons[index]}
                                // listNamesPokemons={listNamesPokemons}
                                // addToPokedex={(pokemonName) => {
                                //     addToPokedex(pokemonName);
                                //     updateListNamesPokemons(pokemonName);
                                // }}
                            />
                        ))
                    )}
                </ContainerListCardPokemon>

                <ContainerBtns>
                    <button onClick={loadPreviousPage} disabled={offset === 0}>
                        Página Anterior
                    </button>
                    <button onClick={loadNextPage}>Próxima Página</button>
                </ContainerBtns>
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
