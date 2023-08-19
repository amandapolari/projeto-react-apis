/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react';
import GlobalContext from './GlobalContext';
import { useEffect, useState } from 'react';

const GlobalState = ({ children }) => {
    const [listPokemonsHome, setListPokemonsHome] = useState([]);
    const [listPokemonsPokedex, setListPokemonsPokedex] = useState([]);
    const [dataReceivedFromApi, setDataReceivedFromApi] = useState();
    const [showButtonAdd, setShowButtonAdd] = useState(false);
    const [showButtonDelete, setShowButtonDelete] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [chooseImage, setChooseImage] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        setShowModal(!showModal);
    }, [onOpen]);

    const clearLocalStorage = () => {
        localStorage.removeItem('pokemonsPokedex');
    };

    const saveLocalStorage = () => {
        clearLocalStorage();
        const listPokemonsSalvesPokedex = JSON.stringify(listPokemonsPokedex);
        localStorage.setItem('pokemonsPokedex', listPokemonsSalvesPokedex);
    };

    useEffect(() => {
        const listPokedexLocalStorage = JSON.parse(
            localStorage.getItem('pokemonsPokedex')
        );
        listPokedexLocalStorage &&
            setListPokemonsPokedex(listPokedexLocalStorage);
    }, []);

    useEffect(() => {
        if (listPokemonsPokedex.length) {
            saveLocalStorage();
        }
    }, [listPokemonsPokedex]);

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
        setChooseImage('capture');
        onOpen();
    };

    const removeItemPokedex = (name) => {
        const updatedPokedex = listPokemonsPokedex.map((innerArray) =>
            innerArray.filter((pokemon) => pokemon.name !== name)
        );
        setListPokemonsPokedex(updatedPokedex);
        setChooseImage('remove');
        onOpen();
        clearLocalStorage();
        saveLocalStorage();
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
        showButtonAdd,
        setShowButtonAdd,
        showButtonDelete,
        setShowButtonDelete,
        showModal,
        setShowModal,
        chooseImage,
        setChooseImage,
        isOpen,
        onOpen,
        onClose,
    };

    return (
        <GlobalContext.Provider value={datas}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;
