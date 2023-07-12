import React from 'react';
import { ContainerPokemonCard } from './PokemonCardStyle';

const PokemonCard = ({ ShowDetails }) => {
    return (
        <ContainerPokemonCard>
            <p>POKEMON CARD</p>
            <button onClick={ShowDetails}>Detalhes</button>
        </ContainerPokemonCard>
    );
};

export default PokemonCard;
