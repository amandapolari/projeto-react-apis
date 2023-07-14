import React from 'react';
import { ContainerPokemonListPage } from './PokemonListPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

const PokemonListPage = ({ presentationChangeForAllDetails }) => {
    return (
        <ContainerPokemonListPage>
            <p>[HOME] POKEMON LIST PAGE</p>
            <PokemonCard
                presentationChangeForAllDetails={
                    presentationChangeForAllDetails
                }
            />
        </ContainerPokemonListPage>
    );
};

export default PokemonListPage;
