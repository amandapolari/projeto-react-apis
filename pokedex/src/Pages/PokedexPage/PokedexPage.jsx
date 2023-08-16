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
    const { listPokemonsHome } = context;
    // console.log('POKEDEX:', listPokemonsHome);

    return (
        <>
            <Header />
            <ContainerPokedexPage>
                <NamePagePokedex>[POKEDEX] POKEDEX PAGE</NamePagePokedex>
                <TitlePagePokedex>Meus Pokémons</TitlePagePokedex>
                <ContainerListCardPokedex>
                    {listPokemonsHome.map((item, index) => {
                        return (
                            <PokemonCard
                                key={index}
                                id={item.url.match(/\/(\d+)\//)[1]}
                                name={item.name}
                                // updateList={updateList}
                            />
                        );
                    })}
                </ContainerListCardPokedex>
            </ContainerPokedexPage>
        </>
    );
};

export default PokedexPage;
