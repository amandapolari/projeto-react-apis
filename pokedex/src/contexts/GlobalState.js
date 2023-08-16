/* eslint-disable react-hooks/exhaustive-deps */
import GlobalContext from './GlobalContext';
import { useState } from 'react';
// import { useEffect, useState } from 'react';

const GlobalState = ({ children }) => {
    const [listPokemonsHome, setListPokemonsHome] = useState([]);
    const [listPokemonsPokedex, setListPokemonsPokedex] = useState([]);
    // const [idPokemonsRemoveds, setIdPokemonsRemoveds] = useState([]);

    // => LÓGICA DE REMOÇÃO DE POKEMONS
    // const updateList = (id) => {
    //     // setListPokemonsHome((prevList) =>
    //     //     prevList.filter((item) => item.url.match(/\/(\d+)\//)[1] !== id)
    //     // );
    //     // setIdPokemonsRemoveds((prevIds) => [...prevIds, id]);

    // };

    //
    //useEffect(() => {
    //     localStorage.setItem(
    //         'idPokemonsRemoveds',
    //         JSON.stringify(idPokemonsRemoveds)
    //     );
    // }, [idPokemonsRemoveds]);

    const updateList = (name) => {
        const listFilteredForHome = listPokemonsHome.filter(
            (pokemon) => pokemon.name !== name
        );
        setListPokemonsHome(listFilteredForHome);

        const listFilteredForPokedex = listPokemonsHome.filter(
            (pokemon) => pokemon.name === name
        );
        const newList = [...listPokemonsPokedex, listFilteredForPokedex];
        setListPokemonsPokedex(newList);
    };

    // useEffect(() => {
    //     console.log(listPokemonsPokedex);
    // }, [listPokemonsHome]);

    const datas = {
        listPokemonsHome,
        setListPokemonsHome,
        listPokemonsPokedex,
        setListPokemonsPokedex,
        updateList,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
