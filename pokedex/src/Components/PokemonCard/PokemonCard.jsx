import React from 'react';
import { ContainerPokemonCard } from './PokemonCardStyle';

const PokemonCard = ({ presentationChangeForAllDetails }) => {
    return (
        <ContainerPokemonCard>
            <p>POKEMON CARD</p>
            <button onClick={presentationChangeForAllDetails}>Detalhes</button>
        </ContainerPokemonCard>
    );
};

export default PokemonCard;
