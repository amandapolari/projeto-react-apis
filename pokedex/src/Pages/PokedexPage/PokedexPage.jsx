import React from 'react';
import { ContainerPokedexPage } from './PokedexPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

const PokedexPage = ({ presentationChangeForAllDetails }) => {
    return (
        <ContainerPokedexPage>
            <p>[POKEDEX] POKEDEX PAGE</p>
            <PokemonCard
                presentationChangeForAllDetails={
                    presentationChangeForAllDetails
                }
            />
        </ContainerPokedexPage>
    );
};

export default PokedexPage;
