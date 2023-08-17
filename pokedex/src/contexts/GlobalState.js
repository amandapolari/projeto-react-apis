/* eslint-disable react-hooks/exhaustive-deps */
import GlobalContext from './GlobalContext';
import { useEffect, useState } from 'react';

const GlobalState = ({ children }) => {
    const [listPokemonsHome, setListPokemonsHome] = useState([]);
    const [listPokemonsPokedex, setListPokemonsPokedex] = useState([]);
    const [dataReceivedFromApi, setDataReceivedFromApi] = useState();
    const [presentInPokedex, setPresentInPokedex] = useState(false);

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

    const removeItemPokedex = (name) => {
        const updatedPokedex = listPokemonsPokedex.map((innerArray) =>
            innerArray.filter((pokemon) => pokemon.name !== name)
        );
        setListPokemonsPokedex(updatedPokedex);
    };

    useEffect(() => {
        if (dataReceivedFromApi && listPokemonsPokedex.length > 0) {
            const namesPokemonsPokedex = listPokemonsPokedex.flatMap((item) =>
                item.map((i) => i.name)
            );

            const filteredData = dataReceivedFromApi.filter(
                (item) => !namesPokemonsPokedex.includes(item.name)
            );

            setListPokemonsHome(filteredData);
        }
    }, [dataReceivedFromApi, listPokemonsPokedex]);

    const datas = {
        listPokemonsHome,
        setListPokemonsHome,
        listPokemonsPokedex,
        setListPokemonsPokedex,
        updateList,
        removeItemPokedex,
        dataReceivedFromApi,
        setDataReceivedFromApi,
        presentInPokedex,
        setPresentInPokedex,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
