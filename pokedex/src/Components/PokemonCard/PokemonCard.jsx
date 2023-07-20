import React, { useState } from 'react';
import {
    ButtonAddPokemonCard,
    ButtonDetailPokemonCard,
    ContainerButtonPokemonCard,
    ContainerPokemonCard,
    ImgPokemons,
    NamePokemon,
    NamePokemonCard,
} from './PokemonCardStyle';
import { goToDetails } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ name, url, listNamesPokemons, index, addToPokedex, }) => {
    const navegate = useNavigate();

    const pokemonId = url && url.match(/\/(\d+)\//)[1];
    const imageUrl = pokemonId
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
        : '';

        // const adjustedName = name.charAt(0).toLowerCase() + name.slice(1); // Ajustar o nome para começar com letra minúscula


    return (
        <ContainerPokemonCard>
            <NamePokemon>{name}</NamePokemon>
            <ImgPokemons src={imageUrl} alt={`Imagem do ${name}`} />
            {/* <NamePokemonCard>POKE CARD</NamePokemonCard> */}
            <ContainerButtonPokemonCard>
                <ButtonDetailPokemonCard
                    onClick={() => {
                        goToDetails(navegate);
                    }}
                >
                    Detalhes
                </ButtonDetailPokemonCard>
                <ButtonAddPokemonCard
                    onClick={() => {
                        addToPokedex(name);
                    }}
                >
                    Adicionar
                </ButtonAddPokemonCard>
            </ContainerButtonPokemonCard>
        </ContainerPokemonCard>
    );
};

export default PokemonCard;
