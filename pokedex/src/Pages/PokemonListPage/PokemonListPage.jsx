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
    const [datasImages] = useRequestData('pokemon/1');

    // Caminho para capturar a imagem:
    // datasImages.sprites.back_default

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
                {/* Dessa forma carrega na primeira renderização mas quebra se a página for atualizada */}
                <img src={datasImages.sprites.back_default} alt="" />

                <TitlePageHome>Todos os Pokémons</TitlePageHome>
                <ContainerListCardPokemon>
                    {isLoading ? (
                        <Loading />
                    ) : isError ? (
                        <Error />
                    ) : (
                        listNamesPokemons.map((pokemon) => {
                            return <PokemonCard key={pokemon} name={pokemon} />;
                        })
                    )}
                </ContainerListCardPokemon>
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
