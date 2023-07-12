import { useEffect, useState } from 'react';
import './AppStyle.js';
import { ContainerApp } from './AppStyle.js';
import Header from './Components/Header/Header.jsx';
import PokemonCard from './Components/PokemonCard/PokemonCard.jsx';
import PokedexPage from './Pages/PokedexPage/PokedexPage.jsx';
import PokemonDetailPage from './Pages/PokemonDetailPage/PokemonDetailPage.jsx';
import PokemonListPage from './Pages/PokemonListPage/PokemonListPage.jsx';

function App() {
    // Controles para Header:
    const [controlStateShowAllPokemons, setControlStateShowAllPokemons] =
        useState(true);

    const [controlStateShowPokedex, setControlStateShowPokedex] =
        useState(false);

    const [controlStateShowDetail, setControlStateShowDetail] = useState(false);

    const ShowDetails = () => {
        setControlStateShowDetail(!controlStateShowDetail);
        setControlStateShowAllPokemons(false);
        setControlStateShowPokedex(true);
    };

    return (
        <ContainerApp>
            <Header
                controlStateShowAllPokemons={controlStateShowAllPokemons}
                setControlStateShowAllPokemons={setControlStateShowAllPokemons}
                controlStateShowPokedex={controlStateShowPokedex}
                setControlStateShowPokedex={setControlStateShowPokedex}
                setControlStateShowDetail={setControlStateShowDetail}
                controlStateShowDetail={controlStateShowDetail}
            />

            <PokemonCard ShowDetails={ShowDetails} />
            <PokedexPage />
            <PokemonDetailPage />
            <PokemonListPage />
        </ContainerApp>
    );
}

export default App;
