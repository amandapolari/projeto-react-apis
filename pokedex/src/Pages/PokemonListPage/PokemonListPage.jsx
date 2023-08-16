/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    // ContainerBtns,
    ContainerListCardPokemon,
    ContainerPokemonListPage,
    NamePageHome,
    TitlePageHome,
} from './PokemonListPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';
import useRequestData from '../../hooks/useRequestData';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';

const PokemonListPage = () => {
    const context = useContext(GlobalContext);
    const { listPokemonsHome, setListPokemonsHome } = context;
    // console.log(listPokemonsHome);

    // console.log('INICIO');
    // => PAGINAÇÃO:
    // const [offset, setOffset] = useState(0);
    // const limitPerPage = 18;
    // const url = `pokemon?limit=${limitPerPage}&offset=${offset}`;
    // const [data, isLoading, isError] = useRequestData(url);
    // const loadNextPage = () => {
    //     setOffset((prevOffset) => prevOffset + limitPerPage);
    // };
    // const loadPreviousPage = () => {
    //     if (offset > 0) {
    //         setOffset((prevOffset) => prevOffset - limitPerPage);
    //     }
    // };
    // => SEM PAGINAÇÃO:
    // const url = `pokemon?limit=${limitPerPage}&offset=${offset}`;
    const [data, isLoading, isError] = useRequestData(
        'pokemon?limit=8&offset=0'
    );

    // => PASSANDO _TODOS_ OS DADOS DA API PARA O UPDATELIST:
    // const [updateListData, setUpdateListData] = useState(data);

    useEffect(() => {
        const captureDatas = async () => {
            try {
                if (data.length) {
                    setListPokemonsHome(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        captureDatas();
    }, [data]);

    // => LÓGICA DE REMOÇÃO DE POKEMONS
    const [idPokemonsRemoveds, setIdPokemonsRemoveds] = useState([]);
    // console.log(idPokemonsRemoveds);

    // useEffect(() => {
    //     setIdPokemonsRemoveds(
    //         JSON.parse(localStorage.getItem('idPokemonsRemoveds')) || []
    //     );
    // }, [data, offset]);

    // REMOVENDO POR ID
    const updateList = (id) => {
        setListPokemonsHome((prevList) =>
            prevList.filter((item) => item.url.match(/\/(\d+)\//)[1] !== id)
        );
        setIdPokemonsRemoveds((prevIds) => [...prevIds, id]);
    };

    // useEffect(() => {
    //     localStorage.setItem(
    //         'idPokemonsRemoveds',
    //         JSON.stringify(idPokemonsRemoveds)
    //     );
    // }, [idPokemonsRemoveds]);

    // useEffect(() => {
    //     if (updateListData) {
    //         // setListPokemonsHome(updateListData);
    //         console.log(listPokemonsHome);
    //     }
    // }, [idPokemonsRemoveds]);

    useEffect(() => {
        console.log('listPokemonsHome:', listPokemonsHome);
    }, [listPokemonsHome]);

    return (
        <>
            <Header />
            <ContainerPokemonListPage>
                <NamePageHome>[HOME] POKEMON LIST PAGE</NamePageHome>
                <TitlePageHome>Todos os Pokémons</TitlePageHome>
                <ContainerListCardPokemon>
                    {isLoading ? (
                        <Loading />
                    ) : isError ? (
                        <Error />
                    ) : (
                        listPokemonsHome.map((item, index) => {
                            // console.log('TUDO:', updateListData);
                            // console.log('Item:', item);
                            // console.log('Index:', index);

                            // console.log(
                            //     'Teste NAME: ',
                            //     updateListData[index].name
                            // );
                            // console.log(
                            //     'Teste URL: ',
                            //     updateListData[index].url
                            // );
                            // console.log(
                            //     'Teste ID: ',
                            //     item.url.match(/\/(\d+)\//)[1]
                            // );
                            return (
                                <PokemonCard
                                    key={index}
                                    id={item.url.match(/\/(\d+)\//)[1]}
                                    name={item.name}
                                    updateList={updateList}
                                />
                            );
                        })
                    )}
                </ContainerListCardPokemon>

                {/* <ContainerBtns>
                    <button onClick={loadPreviousPage} disabled={offset === 0}>
                        Página Anterior
                    </button>
                    <button onClick={loadNextPage}>Próxima Página</button>
                </ContainerBtns> */}
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
