/* eslint-disable react-hooks/exhaustive-deps */
import GlobalContext from './GlobalContext';
import { useState } from 'react';

const GlobalState = ({ children }) => {
    const [listPokemonsHome, setListPokemonsHome] = useState([]);
    const [listPokemonsPokedex, setListPokemonsPokedex] = useState([]);

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

    //
    // useEffect(() => {
    //     console.log(listPokemonsPokedex);
    // }, [listPokemonsHome]);

    const removeItemPokedex = (name) => {
        const updatedPokedex = listPokemonsPokedex.map((innerArray) =>
            innerArray.filter((pokemon) => pokemon.name !== name)
        );
        setListPokemonsPokedex(updatedPokedex);
    };

    const datas = {
        listPokemonsHome,
        setListPokemonsHome,
        listPokemonsPokedex,
        setListPokemonsPokedex,
        updateList,
        removeItemPokedex,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
