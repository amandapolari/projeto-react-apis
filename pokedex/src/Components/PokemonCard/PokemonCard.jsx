/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
    ButtonAddPokemonCard,
    ButtonDetailPokemonCard,
    ContainerButtonPokemonCard,
    ContainerPokemonCard,
    ImgPokemons,
    ImgType,
    NamePokemon,
    ParagraphPokemonId,
    ContainerTypes,
} from './PokemonCardStyle';
import { goToDetails } from '../../routes/coordinator';
import { useLocation, useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';

const PokemonCard = ({ name, id, url }) => {
    const navegate = useNavigate();
    const location = useLocation();

    if (location.pathname === '/') {
        // console.log('estamos na HOME');
        id = url && url.match(/\/(\d+)\//)[1];
    } else {
        // console.log('NÃO ESTAMOS NA HOME');
    }

    const imageUrl = id
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        : '';

    const [dataId, isLoading, isError] = useRequestData(`pokemon/${id}`);
    const [idPokemon, setIdPokemon] = useState(id);
    const [listTypes, setListTypes] = useState([]);

    const captureTypes = () => {
        const allTypes = dataId.types;
        const arrayTypes = allTypes.map((elemento) => elemento.type.name);
        setListTypes(arrayTypes);
    };

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
                case 3:
                    idCorrigido = `#${idAjustado}`;
                    break;
                default:
                    idCorrigido = `${idAjustado}`;
                    break;
            }
            setIdPokemon(idCorrigido);
        }
    };

    useEffect(() => {
        const captureDatas = async () => {
            try {
                if (id.length) {
                    captureTypes();
                    idCorrected();
                }
            } catch (error) {}
        };

        captureDatas();
    }, [id, dataId]);

    return (
        <ContainerPokemonCard color={getColors(listTypes[0])}>
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <Error />
            ) : (
                <>
                    <ParagraphPokemonId>{idPokemon}</ParagraphPokemonId>
                    <NamePokemon>{name}</NamePokemon>
                    <ContainerTypes>
                        {listTypes.map((type) => {
                            return (
                                <ImgType
                                    key={type}
                                    src={getTypes(type)}
                                    alt="img"
                                ></ImgType>
                            );
                        })}
                    </ContainerTypes>
                    <ImgPokemons src={imageUrl} alt={`Imagem do ${name}`} />
                    <ContainerButtonPokemonCard>
                        <ButtonDetailPokemonCard
                            onClick={() => {
                                goToDetails(navegate, id);
                            }}
                        >
                            Detalhes
                        </ButtonDetailPokemonCard>
                        <ButtonAddPokemonCard
                        // onClick={() => {
                        //     addToPokedex(name);
                        // }}
                        >
                            Capturar!
                        </ButtonAddPokemonCard>
                    </ContainerButtonPokemonCard>
                </>
            )}
        </ContainerPokemonCard>
    );
};

export default PokemonCard;
