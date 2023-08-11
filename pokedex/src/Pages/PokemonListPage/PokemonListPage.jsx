import React, { useEffect, useState } from 'react';
import {
    ContainerBtns,
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
    // => PAGINAÇÃO:
    const [offset, setOffset] = useState(0);
    const limitPerPage = 18;
    const loadNextPage = () => {
        setOffset((prevOffset) => prevOffset + limitPerPage);
    };
    const loadPreviousPage = () => {
        if (offset > 0) {
            setOffset((prevOffset) => prevOffset - limitPerPage);
        }
    };

    const url = `pokemon?limit=${limitPerPage}&offset=${offset}`;
    const [data, isLoading, isError] = useRequestData(url);

    useEffect(() => {
        setUpdateListData([]);
    }, [offset]);
    // PAGINAÇÃO

    // => PASSANDO _TODOS_ OS DADOS DA API PARA O UPDATELIST:
    const [updateListData, setUpdateListData] = useState(data);

    useEffect(() => {
        const captureDatas = async () => {
            try {
                if (data.length) {
                    setUpdateListData(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        captureDatas();
    }, [data]);
    // PASSANDO _TODOS_ OS DADOS DA API PARA O UPDATELIST

    // => LÓGICA DE REMOÇÃO:
    // REMOVENDO POR NOME
    // const updateList = (name) => {
    //     setUpdateListData(
    //         updateListData.filter((item) => {
    //             // console.log('item:', item);
    //             return item.name !== name;
    //         })
    //     );
    //     // console.log('list pos mudança:', updateListData);
    // };

    const [idPokemonsRemoveds, setIdPokemonsRemoveds] = useState([]);

    // Carrega os dados do local storage no estado quando o componente for montado
    useEffect(() => {
        // setUpdateListData(data);
        setIdPokemonsRemoveds(JSON.parse(localStorage.getItem('idPokemonsRemoveds')) || []);
      }, [data, offset]);

    useEffect(() => {
        console.log(idPokemonsRemoveds);
    }, [idPokemonsRemoveds]);

    // REMOVENDO POR ID
    const updateList = (id) => {
        setUpdateListData((prevList) =>
            prevList.filter((item) => item.url.match(/\/(\d+)\//)[1] !== id)
        );
        setIdPokemonsRemoveds((prevIds) => [...prevIds, id]);
    };

    // Salva os dados no local storage sempre que o array idPokemonsRemoveds é atualizado
    useEffect(() => {
        localStorage.setItem(
            'idPokemonsRemoveds',
            JSON.stringify(idPokemonsRemoveds)
        );
    }, [idPokemonsRemoveds]);

    // useEffect(() => {
    //     console.log('Valor atualizado de idPokemonsRemoveds:', idPokemonsRemoveds);
    //   }, [idPokemonsRemoveds]);

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
                        updateListData.map((item, index) => {
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

                <ContainerBtns>
                    <button onClick={loadPreviousPage} disabled={offset === 0}>
                        Página Anterior
                    </button>
                    <button onClick={loadNextPage}>Próxima Página</button>
                </ContainerBtns>
            </ContainerPokemonListPage>
        </>
    );
};

export default PokemonListPage;
