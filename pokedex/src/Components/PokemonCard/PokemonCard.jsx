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
// import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import Loading from '../Loading/Loading';
// import Error from '../Error/Error';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';

const PokemonCard = ({ id, name, updateList }) => {
    const navegate = useNavigate();

    // const location = useLocation();
    // let id;
    // if (location.pathname === '/') {
    //     // console.log('estamos na HOME');
    //     id = url && url.match(/\/(\d+)\//)[1];
    // } else {
    //     // console.log('NÃO ESTAMOS NA HOME');
    // }

    const adjustedName = name && name.charAt(0).toUpperCase() + name.slice(1);

    const imageUrl = id
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        : '';

    const [data, isLoading, isError] = useRequestData(`pokemon/${id}`);
    const [idPokemon, setIdPokemon] = useState(id);
    const [listTypes, setListTypes] = useState([]);

    const captureTypes = () => {
        const allTypes = data.types;
        const arrayTypes = allTypes.map((elemento) => elemento.type.name);
        setListTypes(arrayTypes);
    };

    const idCorrected = () => {
        if (id) {
            const idAjustado = id.toString();
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
    }, [id, data]);

    return (
        <ContainerPokemonCard color={getColors(listTypes[0])}>
            {isLoading ? (
                <Loading />
            ) : isError ? (
                // <Error />
                'Erro na requisição'
            ) : (
                <>
                    <ParagraphPokemonId>{idPokemon}</ParagraphPokemonId>
                    <NamePokemon>{adjustedName}</NamePokemon>
                    <ContainerTypes>
                        {listTypes.map((type, index) => {
                            return (
                                <ImgType
                                    key={index}
                                    src={getTypes(type)}
                                    alt="img"
                                ></ImgType>
                            );
                        })}
                    </ContainerTypes>
                    <ImgPokemons
                        src={imageUrl}
                        alt={`Imagem do ${adjustedName}`}
                    />
                    <ContainerButtonPokemonCard>
                        <ButtonDetailPokemonCard
                            onClick={() => {
                                goToDetails(navegate, id);
                            }}
                        >
                            Detalhes
                        </ButtonDetailPokemonCard>
                        <ButtonAddPokemonCard
                            onClick={() => {
                                // REMOVENDO POR NOME
                                updateList(name);
                                // updateList(id);
                            }}
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
