import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonListPage from '../Pages/PokemonListPage/PokemonListPage';
import PokemonDetailPage from '../Pages/PokemonDetailPage/PokemonDetailPage';
import PokedexPage from '../Pages/PokedexPage/PokedexPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage />} />
                {/* COM path */}
                <Route path="/details/:name" element={<PokemonDetailPage />} />
                {/* SEM path */}
                {/* <Route path="/details" element={<PokemonDetailPage />} /> */}
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
