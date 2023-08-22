/* eslint-disable array-callback-return */
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import {
    ContainerListCardPokedex,
    ContainerPokedexPage,
    TitlePagePokedex,
} from './PokedexPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import Header from '../../Components/Header/Header';
import {
    ContainerBtns,
    DivIconsBtns,
} from '../PokemonListPage/PokemonListPageStyle';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const PokedexPage = () => {
    const context = useContext(GlobalContext);
    const { listPokemonsPokedex, updateList } = context;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if (listPokemonsPokedex.length === 0) {
            const calculatedTotalPages = Math.ceil(
                listPokemonsPokedex.length / itemsPerPage
            );
            setTotalPages(calculatedTotalPages);
        }
    }, [listPokemonsPokedex]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(
        startIndex + itemsPerPage,
        listPokemonsPokedex.length
    );
    const displayedPokemons = listPokemonsPokedex.slice(startIndex, endIndex);

    return (
        <>
            <Header />
            <ContainerPokedexPage>
                <TitlePagePokedex>Meus Pokémons</TitlePagePokedex>
                <ContainerListCardPokedex>
                    {displayedPokemons.flatMap((innerArray, index) =>
                        innerArray.map((item, innerIndex) => (
                            <div key={`${index}-${innerIndex}`}>
                                <PokemonCard
                                    id={
                                        item.url &&
                                        item.url.match(/\/(\d+)\//)[1]
                                    }
                                    name={item.name}
                                    updateList={updateList}
                                />
                            </div>
                        ))
                    )}
                </ContainerListCardPokedex>
                <ContainerBtns>
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <DivIconsBtns>
                            <CiCircleChevLeft />
                        </DivIconsBtns>
                    </button>
                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <DivIconsBtns>
                            <CiCircleChevRight />
                        </DivIconsBtns>
                    </button>
                </ContainerBtns>
            </ContainerPokedexPage>
        </>
    );
};

export default PokedexPage;
