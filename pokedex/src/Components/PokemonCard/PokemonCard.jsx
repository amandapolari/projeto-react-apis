import React, { useEffect, useState } from 'react';
import {
    ButtonAddPokemonCard,
    ButtonDetailPokemonCard,
    ContainerButtonPokemonCard,
    ContainerPokemonCard,
    ImgPokemons,
    NamePokemon,
    ParagraphPokemonId,
    // NamePokemonCard,
} from './PokemonCardStyle';
import { goToDetails } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';

const PokemonCard = ({ name, url, listNamesPokemons, addToPokedex }) => {
    const navegate = useNavigate();
    const pokemonId = url && url.match(/\/(\d+)\//)[1];
    const imageUrl = pokemonId
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
        : '';

    // useEffect(() => {
    //     idCorrected();
    // }, []);

    // const [listIds, setListIds] = useState([]);
    // console.log('o que vem em pokemonId:', pokemonId);

    const [dataId] = useRequestData(`pokemon/${pokemonId}`);
    // console.log(dataId.id);

    // const [idPokemon, setIdPokemon] = useState(dataId.id);
    // console.log(idPokemon);

    // const idPoke = dataId.id;
    // const idCorrected = () => {
    //     const id = idPokemon.toString();
    //     switch (id.length) {
    //         case 1:
    //             return setIdPokemon(`0 ${id}`);
    //         case 2:
    //             return setIdPokemon(`00 ${id}`);
    //         default:
    //             return setIdPokemon(id);
    //     }
    // };

    return (
        <ContainerPokemonCard>
            <ParagraphPokemonId>{dataId.id}</ParagraphPokemonId>
            {/* <ParagraphPokemonId>{idPokemon}</ParagraphPokemonId> */}
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
