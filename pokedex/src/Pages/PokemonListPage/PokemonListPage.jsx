import React, { useEffect, useState } from 'react';
import {
    ContainerListCardPokemon,
    ContainerPokemonListPage,
    NamePageHome,
    TitlePageHome,
} from './PokemonListPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';
import useRequestData from '../../hooks/useRequestData';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Error/Error';

const PokemonListPage = () => {
    const [data, isLoading, isError] = useRequestData('pokemon/');
    const [listNamesPokemons, setListNamesPokemons] = useState([]);
    const [listUrlsPokemons, setUrlsPokemons] = useState([]);
    const [listPokemonsPokedex, setPokemonsPokedex] = useState([]);

    useEffect(() => {
        const urls = data.map((item) => item.url);
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

    console.log(listPokemonsPokedex);
    console.log(listNamesPokemons);

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
                                name={pokemonName}
                                url={listUrlsPokemons[index]}
                                listNamesPokemons={listNamesPokemons}
                                addToPokedex={(pokemonName) => {
                                    addToPokedex(pokemonName);
                                    updateListNamesPokemons(pokemonName);
                                }}
                            />
                        ))
                    )}
                </ContainerListCardPokemon>
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
