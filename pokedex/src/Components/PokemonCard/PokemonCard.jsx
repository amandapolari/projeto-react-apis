import React from 'react';
import {
    ButtonAddPokemonCard,
    ButtonDetailPokemonCard,
    ContainerButtonPokemonCard,
    ContainerPokemonCard,
    NamePokemonCard,
} from './PokemonCardStyle';
import { goToDetails } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const PokemonCard = () => {
    const navegate = useNavigate();

    return (
        <ContainerPokemonCard>
            <NamePokemonCard>POKE CARD</NamePokemonCard>
            <ContainerButtonPokemonCard>
                <ButtonDetailPokemonCard
                    onClick={() => {
                        goToDetails(navegate);
                    }}
                >
                    Detalhes
                </ButtonDetailPokemonCard>
                <ButtonAddPokemonCard>Adicionar</ButtonAddPokemonCard>
            </ContainerButtonPokemonCard>
        </ContainerPokemonCard>
    );
};

export default PokemonCard;
