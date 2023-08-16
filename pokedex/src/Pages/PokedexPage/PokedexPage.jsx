/* eslint-disable array-callback-return */
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
    const { listPokemonsPokedex, updateList } = context;

    return (
        <>
            <Header />
            <ContainerPokedexPage>
                <NamePagePokedex>[POKEDEX] POKEDEX PAGE</NamePagePokedex>
                <TitlePagePokedex>Meus Pokémons</TitlePagePokedex>
                <ContainerListCardPokedex>
                    {listPokemonsPokedex.flatMap((innerArray, index) =>
                        innerArray.map((item, innerIndex) => (
                            <div key={`${index}-${innerIndex}`}>
                                <PokemonCard
                                    id={
                                        item.url &&
                                        item.url.match(/\/(\d+)\//)[1]
                                    }
                                    name={item.name}
                                    updateList={updateList}
                                />
                            </div>
                        ))
                    )}
                </ContainerListCardPokedex>
            </ContainerPokedexPage>
        </>
    );
};

export default PokedexPage;
