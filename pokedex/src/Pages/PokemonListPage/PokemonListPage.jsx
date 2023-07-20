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
    const [listNamesPokemons, setNamesPokemons] = useState([]);
    const [listUrlsPokemons, setUrlsPokemons] = useState([]);

    useEffect(() => {
        const urls = data.map((item) => item.url);
        const names = data.map(
            (item) => item.name.charAt(0).toUpperCase() + item.name.slice(1)
        );
        setUrlsPokemons(urls);
        setNamesPokemons(names);
    }, [data]);

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
                            />
                        ))
                    )}
                </ContainerListCardPokemon>
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
