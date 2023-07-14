import React from 'react';
import {
    ButtonAddPokemonCard,
    ButtonDetailPokemonCard,
    ContainerButtonPokemonCard,
    ContainerPokemonCard,
    NamePokemonCard,
} from './PokemonCardStyle';

const PokemonCard = ({ presentationChangeForAllDetails }) => {
    return (
        <ContainerPokemonCard>
            <NamePokemonCard>POKE CARD</NamePokemonCard>
            <ContainerButtonPokemonCard>
                <ButtonDetailPokemonCard
                    onClick={presentationChangeForAllDetails}
                >
                    Detalhes
                </ButtonDetailPokemonCard>
                <ButtonAddPokemonCard>Adicionar</ButtonAddPokemonCard>
            </ContainerButtonPokemonCard>
        </ContainerPokemonCard>
    );
};

export default PokemonCard;
