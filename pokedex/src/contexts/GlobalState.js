import GlobalContext from './GlobalContext';
import { useState } from 'react';

const GlobalState = ({ children }) => {
    const [listPokemonsHome, setListPokemonsHome] = useState([]);
    const [idPokemonsRemoveds, setIdPokemonsRemoveds] = useState([]);

    // => LÓGICA DE REMOÇÃO DE POKEMONS
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

    const datas = {
        listPokemonsHome,
        setListPokemonsHome,
        updateList,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
