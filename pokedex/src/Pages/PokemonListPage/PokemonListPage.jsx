import React from 'react';
import {
    ContainerListCardPokemon,
    ContainerPokemonListPage,
    NamePageHome,
    TitlePageHome,
} from './PokemonListPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';

const PokemonListPage = () => {
    return (
        <>
            <Header />
            <ContainerPokemonListPage>
                <NamePageHome>[HOME] POKEMON LIST PAGE</NamePageHome>
                <TitlePageHome>Todos os Pokémons</TitlePageHome>
                <ContainerListCardPokemon>
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                </ContainerListCardPokemon>
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
