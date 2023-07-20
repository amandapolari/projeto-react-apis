import React from 'react';
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

const PokemonCard = ({ name, url }) => {
    const navegate = useNavigate();

    const pokemonId = url && url.match(/\/(\d+)\//)[1];
    const imageUrl = pokemonId
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
        : '';

    // console.log('imageUrl:', imageUrl);
    // console.log(pokemonId);
    // console.log(imageUrl);
    // console.log(name);
    // console.log(url);

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
                <ButtonAddPokemonCard>Adicionar</ButtonAddPokemonCard>
            </ContainerButtonPokemonCard>
        </ContainerPokemonCard>
    );
};

export default PokemonCard;
