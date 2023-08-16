import React, { useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    ContainerListCardPokedex,
    ContainerPokedexPage,
    NamePagePokedex,
    TitlePagePokedex,
} from './PokedexPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';

const PokedexPage = () => {
    const context = useContext(GlobalContext);
    const { listTest } = context;
    // console.log(listTest);
    return (
        <>
            <Header />
            <ContainerPokedexPage>
                <NamePagePokedex>[POKEDEX] POKEDEX PAGE</NamePagePokedex>
                <TitlePagePokedex>Meus Pokémons</TitlePagePokedex>
                <ContainerListCardPokedex>
                    <PokemonCard />
                </ContainerListCardPokedex>
            </ContainerPokedexPage>
        </>
    );
};

export default PokedexPage;
