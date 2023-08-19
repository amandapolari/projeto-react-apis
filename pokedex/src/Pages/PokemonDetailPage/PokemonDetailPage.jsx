/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {
    ContainerImgBack,
    ContainerImgFront,
    ContainerImgMain,
    ContainerImgs,
    ContainerListCardDetails,
    ContainerMoves,
    ContainerNameAndButton,
    ContainerPokemonDetailPage,
    ContainerStat,
    ContainerStats,
    ContainerTypes,
    ContainerValueStat,
    ImgMain,
    NamePageDetails,
    Stat,
    StatValue,
} from './PokemonDetailPageStyle';
import Header from '../../Components/Header/Header';
import { useParams } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';

const PokemonDetailPage = () => {
    const params = useParams();
    const name = params.name;
    const [pokemonData, isLoading, isError] = useRequestData(`pokemon/${name}`);

    const [values, setValues] = useState({
        urlImgFront: '',
        urlImgBack: '',
    });

    // ---

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

    // ---

    const [listStats, setListStats] = useState([]);
    const captureStats = () => {
        const allStats = pokemonData.stats;
        const arrayStats = allStats.map((elemento) => elemento.stat.name);
        setListStats(arrayStats);
    };

    const [listStatsValues, setListStatsValues] = useState([]);
    const captureStatsValues = () => {
        const allStatsValues = pokemonData.stats;
        const arrayStatsValues = allStatsValues.map(
            (elemento) => elemento.base_stat
        );
        setListStatsValues(arrayStatsValues);
    };

    // ---

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
                    captureStats();
                    captureStatsValues();
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
                    <ContainerNameAndButton>
                        <NamePageDetails>
                            [PÁGINA DE DETALHES] POKEMON DETAIL PAGE
                        </NamePageDetails>
                    </ContainerNameAndButton>
                    <ContainerListCardDetails color={getColors(listTypes[0])}>
                        <ContainerImgFront>
                            <ContainerImgs alt="" src={values.urlImgFront} />
                        </ContainerImgFront>
                        <ContainerImgBack>
                            <ContainerImgs alt="" src={values.urlImgBack} />
                        </ContainerImgBack>
                        <ContainerStats>
                            <ContainerStat>
                                {listStats.map((item) => {
                                    return <Stat key={item}>{`${item}:`}</Stat>;
                                })}
                            </ContainerStat>
                            <ContainerValueStat>
                                {listStatsValues.map((item, index) => {
                                    return (
                                        <StatValue key={index}>
                                            {item}
                                        </StatValue>
                                    );
                                })}
                            </ContainerValueStat>
                        </ContainerStats>
                        <ContainerImgMain>
                            <ImgMain
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
                                alt=""
                            />
                        </ContainerImgMain>
                        <ContainerTypes>
                            <p>{lisIdPokemon}</p>
                            <p>{lisName}</p>
                            <div>
                                {listTypes.map((type) => {
                                    return (
                                        <img
                                            key={type}
                                            src={getTypes(type)}
                                            alt="img"
                                        ></img>
                                    );
                                })}
                            </div>
                        </ContainerTypes>
                        <ContainerMoves>
                            {listMoves.map((move) => {
                                return <p key={move}>{move}</p>;
                            })}
                        </ContainerMoves>
                    </ContainerListCardDetails>
                </ContainerPokemonDetailPage>
            )}
        </>
    );
};

export default PokemonDetailPage;
