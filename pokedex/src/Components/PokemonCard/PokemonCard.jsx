/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    ContainerButtonPokemonCard,
    ContainerPokemonCard,
    ImgPokemons,
    ImgType,
    NamePokemon,
    ParagraphPokemonId,
    ContainerTypes,
    ContainerImage,
} from './PokemonCardStyle';
import { goToDetails } from '../../routes/coordinator';
import { useLocation, useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';
import { Button } from '@chakra-ui/react';

const PokemonCard = ({ id, name, updateList }) => {
    const context = useContext(GlobalContext);
    const { removeItemPokedex } = context;

    const navegate = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const [isHome, SetIsHome] = useState(true);

    useEffect(() => {
        if (pathname === '/') {
            SetIsHome(true);
        } else if (pathname === '/pokedex') {
            SetIsHome(false);
        }
    }, []);

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
                <Error />
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
                    <ContainerImage>
                        <ImgPokemons
                            src={imageUrl}
                            alt={`Imagem do ${adjustedName}`}
                        />
                    </ContainerImage>
                    <ContainerButtonPokemonCard>
                        <Button
                            variant="link"
                            color="white"
                            textDecorationLine="underline"
                            fontWeight="700"
                            fontFamily="Poppins"
                            fontSize="16px"
                            text-decoration-line=" underline"
                            onClick={() => {
                                goToDetails(navegate, name);
                            }}
                        >
                            Detalhes
                        </Button>
                        {isHome ? (
                            <Button
                                variant="add"
                                h="4.9vh"
                                onClick={() => {
                                    updateList(name);
                                }}
                            >
                                Capturar!
                            </Button>
                        ) : (
                            <Button
                                variant="delete"
                                onClick={() => {
                                    removeItemPokedex(name);
                                }}
                            >
                                Excluir!
                            </Button>
                        )}
                    </ContainerButtonPokemonCard>
                </>
            )}
        </ContainerPokemonCard>
    );
};

export default PokemonCard;
