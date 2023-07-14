import React from 'react';
import {
    ContainerListCardPokedex,
    ContainerPokedexPage,
    NamePagePokedex,
    TitlePagePokedex,
} from './PokedexPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';

const PokedexPage = () => {
    return (
        <>
            <Header />
            <ContainerPokedexPage>
                <NamePagePokedex>[POKEDEX] POKEDEX PAGE</NamePagePokedex>
                <TitlePagePokedex>Meus Pokémons</TitlePagePokedex>
                <ContainerListCardPokedex>
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                    <PokemonCard />
                </ContainerListCardPokedex>
            </ContainerPokedexPage>
        </>
    );
};

export default PokedexPage;
