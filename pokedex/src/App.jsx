import './AppStyle.js';
import { ContainerApp } from './AppStyle.js';
import Header from './Components/Header/Header.jsx';
import PokemonCard from './Components/PokemonCard/PokemonCard.jsx';
import PokedexPage from './Pages/PokedexPage/PokedexPage.jsx';
import PokemonDetailPage from './Pages/PokemonDetailPage/PokemonDetailPage.jsx';
import PokemonListPage from './Pages/PokemonListPage/PokemonListPage.jsx';

function App() {
    return (
        <ContainerApp>
            <Header />
            <PokemonCard />
            <PokedexPage />
            <PokemonDetailPage />
            <PokemonListPage />
        </ContainerApp>
    );
}

export default App;
