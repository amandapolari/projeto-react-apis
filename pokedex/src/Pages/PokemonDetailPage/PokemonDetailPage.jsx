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

const PokemonDetailPage = () => {
    const params = useParams();
    // todo objeto:
    // console.log(params);
    // acessando a propriedade id:
    // console.log(params.id);

    const id = params.id;

    const [pokemonData, isLoading, isError] = useRequestData(`pokemon/${id}`);

    console.log(pokemonData);

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
        // console.log(allMoves);
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
                        // urlImgFront: pokemonData.sprites.front_default,
                        // urlImgBack: pokemonData.sprites.back_default,
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
                    // console.log('Esta capturando');
                }
            } catch (error) {
                console.log(error);
            }
        };

        captureDatas();
    }, [id, pokemonData]);

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
                    <ContainerListCardDetails>
                        <ContainerImgFront>
                            <ContainerImgs
                                alt=""
                                // src={pokemonData.sprites.front_default}
                                src={values.urlImgFront}
                            />
                        </ContainerImgFront>
                        <ContainerImgBack>
                            <ContainerImgs
                                alt=""
                                // src={pokemonData.sprites.back_default}
                                src={values.urlImgBack}
                            />
                        </ContainerImgBack>
                        <ContainerStats>
                            <ContainerStat>
                                {listStats.map((item) => {
                                    return <Stat key={item}>{`${item}:`}</Stat>;
                                })}
                            </ContainerStat>
                            <ContainerValueStat>
                                {listStatsValues.map((item) => {
                                    return (
                                        <StatValue key={item}>{item}</StatValue>
                                    );
                                })}
                            </ContainerValueStat>
                        </ContainerStats>
                        <ContainerImgMain>
                            <ImgMain
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
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
