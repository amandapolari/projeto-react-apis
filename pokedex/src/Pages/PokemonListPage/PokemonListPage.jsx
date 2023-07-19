import React from 'react';
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
    const [data, isLoading, isError] = useRequestData();
    console.log('Resultado', data);
    return (
        <>
            <Header />
            <ContainerPokemonListPage>
                <NamePageHome>[HOME] POKEMON LIST PAGE</NamePageHome>
                <TitlePageHome>Todos os Pokémons</TitlePageHome>
                <ContainerListCardPokemon>
                    {isError ? (
                        <Error />
                    ) : isLoading ? (
                        <Loading />
                    ) : (
                        data.map((pokemon) => {
                            return (
                                <PokemonCard
                                    key={pokemon.name}
                                    name={pokemon.name}
                                />
                            );
                        })
                    )}
                    {/* <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard /> */}
                </ContainerListCardPokemon>
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
