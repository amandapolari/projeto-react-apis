/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
    ContainerAllStats,
    ContainerImgBack,
    ContainerImgFront,
    ContainerImgMain,
    ContainerImgTypeDetails,
    ContainerImgs,
    ContainerListCardDetails,
    ContainerMiniImages,
    ContainerMoves,
    ContainerPokemonDetailPage,
    ContainerTypes,
    ContainerValueAndStat,
    IdDetails,
    ImgMain,
    ImgTypeDetails,
    Move,
    NameDetails,
    NamePageDetails,
    Stat,
    StatValue,
    TitleMoves,
    TitleStats,
} from './PokemonDetailPageStyle';
import Header from '../../Components/Header/Header';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';
import { Divider, Progress, Stack } from '@chakra-ui/react';

const PokemonDetailPage = () => {
    const params = useParams();
    const name = params.name;
    const [pokemonData, isLoading, isError] = useRequestData(`pokemon/${name}`);
    const [values, setValues] = useState({
        urlImgFront: '',
        urlImgBack: '',
    });

    const [listTypes, setListTypes] = useState([]);
    const captureTypes = () => {
        const allTypes = pokemonData.types;
        const arrayTypes = allTypes.map((elemento) => elemento.type.name);
        setListTypes(arrayTypes);
    };

    const [listMoves, setListMoves] = useState([]);
    const captureMoves = () => {
        const allMoves = pokemonData.moves;
        const arrayMoves = allMoves.map((elemento) => elemento.move.name);
        setListMoves(arrayMoves);
    };

    const [listStatsValues, setListStatsValues] = useState([]);
    const captureStatsValues = () => {
        const allStatsValues = pokemonData.stats;
        const arrayStatsValues = allStatsValues.map(
            (elemento) => elemento.base_stat
        );
        setListStatsValues(arrayStatsValues);
    };

    const [listAllStats, setListAllStats] = useState([]);
    const captureAllStats = () => {
        const allStats = pokemonData.stats;
        const arrayStats = allStats.map((elemento) => {
            // console.log(elemento);
            // console.log('name stat:', elemento.stat.name);
            // console.log('value stat:', elemento.base_stat);
            return elemento;
        });
        setListAllStats(arrayStats);
    };

    const sum = listStatsValues.reduce((accumulator, item) => {
        const sum = accumulator + item;
        return sum;
    }, 0);

    const [lisIdPokemon, setLisIdPokemon] = useState('');
    const [lisName, setLisName] = useState('');

    const idCorrected = () => {
        if (pokemonData.id) {
            const idAjustado = pokemonData.id.toString();
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
            setLisIdPokemon(idCorrigido);
        }
    };

    const nameCorrected = () => {
        setLisName(
            pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)
        );
    };

    useEffect(() => {
        const captureDatas = async () => {
            try {
                if (pokemonData.sprites) {
                    setValues({
                        urlImgFront:
                            pokemonData.sprites.versions['generation-v'][
                                'black-white'
                            ].animated.front_default,
                        urlImgBack:
                            pokemonData.sprites.versions['generation-v'][
                                'black-white'
                            ].animated.back_default,
                    });
                    captureTypes();
                    idCorrected();
                    nameCorrected();
                    captureMoves();
                    captureStatsValues();
                    captureAllStats();
                }
            } catch (error) {
                console.log(error);
            }
        };

        captureDatas();
    }, [pokemonData.id, pokemonData]);

    return (
        <>
            <Header />
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <Error />
            ) : (
                <ContainerPokemonDetailPage>
                    <NamePageDetails>Detalhes</NamePageDetails>
                    <ContainerListCardDetails color={getColors(listTypes[0])}>
                        <ContainerMiniImages>
                            <ContainerImgFront>
                                <ContainerImgs
                                    alt=""
                                    src={values.urlImgFront}
                                />
                            </ContainerImgFront>
                            <ContainerImgBack>
                                <ContainerImgs alt="" src={values.urlImgBack} />
                            </ContainerImgBack>
                        </ContainerMiniImages>
                        <ContainerAllStats>
                            <TitleStats>Base stats</TitleStats>
                            {listAllStats.map((element, index) => {
                                return (
                                    <>
                                        <Divider marginTop="0.1vh" />
                                        <ContainerValueAndStat key={index}>
                                            <Stat>{element.stat.name}</Stat>

                                            <StatValue>
                                                {element.base_stat}
                                            </StatValue>
                                            <Stack
                                                justifyContent="start"
                                                spacing={5}
                                            >
                                                <Progress
                                                    colorScheme={
                                                        element.base_stat < 50
                                                            ? 'pink'
                                                            : 'blue'
                                                    }
                                                    size="sm"
                                                    value={element.base_stat}
                                                    borderRadius="3px"
                                                    w="90%"
                                                    textAlign="end"
                                                />
                                            </Stack>
                                        </ContainerValueAndStat>
                                    </>
                                );
                            })}
                            <Divider marginTop="0.1vh" />
                            <ContainerValueAndStat>
                                <Stat>Total</Stat>
                                <StatValue>
                                    <strong>{sum && sum}</strong>
                                </StatValue>
                            </ContainerValueAndStat>
                            <Divider marginTop="0.1vh" />
                        </ContainerAllStats>
                        <ContainerImgMain>
                            <ImgMain
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
                                alt=""
                            />
                        </ContainerImgMain>
                        <ContainerTypes>
                            <IdDetails>{lisIdPokemon}</IdDetails>
                            <NameDetails>{lisName}</NameDetails>
                            <ContainerImgTypeDetails>
                                {listTypes.map((type) => {
                                    return (
                                        <ImgTypeDetails
                                            key={type}
                                            src={getTypes(type)}
                                            alt="img"
                                        ></ImgTypeDetails>
                                    );
                                })}
                            </ContainerImgTypeDetails>
                        </ContainerTypes>
                        <ContainerMoves>
                            <TitleMoves>Moves:</TitleMoves>
                            {listMoves.map((move) => {
                                return <Move key={move}>{move}</Move>;
                            })}
                        </ContainerMoves>
                    </ContainerListCardDetails>
                </ContainerPokemonDetailPage>
            )}
        </>
    );
};

export default PokemonDetailPage;
