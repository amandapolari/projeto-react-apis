import React, { useEffect, useState } from 'react';
import {
    ButtonAddPokemonCard,
    ButtonDetailPokemonCard,
    ContainerButtonPokemonCard,
    ContainerPokemonCard,
    ImgPokemons,
    NamePokemon,
    ParagraphPokemonId,
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

    // const [listIds, setListIds] = useState([]);
    // console.log('o que vem em pokemonId:', pokemonId);

    const [dataId, isLoading, isError] = useRequestData(`pokemon/${pokemonId}`);
    const [idPokemon, setIdPokemon] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (dataId.id) {
            setIdPokemon(dataId.id);
            setDataLoaded(true);
        }
    }, [dataId.id]);

    useEffect(() => {
        if (dataLoaded) {
            idCorrected();
        }
    }, [dataLoaded]);

    const idCorrected = () => {
        if (idPokemon) {
            const idAjustado = idPokemon.toString();
            let idCorrigido = '';

            switch (idAjustado.length) {
                case 1:
                    idCorrigido = `#00${idAjustado}`;
                    break;
                case 2:
                    idCorrigido = `#0${idAjustado}`;
                    break;
                default:
                    idCorrigido = idAjustado;
                    break;
            }
            setIdPokemon(idCorrigido);
        }
    };

    console.log(idPokemon);

    return (
        <ContainerPokemonCard>
            <ParagraphPokemonId>{idPokemon}</ParagraphPokemonId>
            <NamePokemon>{name}</NamePokemon>
            <ImgPokemons src={imageUrl} alt={`Imagem do ${name}`} />
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
