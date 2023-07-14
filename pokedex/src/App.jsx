import { useState } from 'react';
import './AppStyle.js';
import { ContainerApp } from './AppStyle.js';
import Header from './Components/Header/Header.jsx';
// import PokemonCard from './Components/PokemonCard/PokemonCard.jsx';
import PokedexPage from './Pages/PokedexPage/PokedexPage.jsx';
import PokemonDetailPage from './Pages/PokemonDetailPage/PokemonDetailPage.jsx';
import PokemonListPage from './Pages/PokemonListPage/PokemonListPage.jsx';

function App() {
    // Lógica para a mudança de estado da apresentação dos botões do Header
    const [controlStateShowAllPokemons, setControlStateShowAllPokemons] =
        useState(true);
    const [controlStateShowPokedex, setControlStateShowPokedex] =
        useState(false);
    const [controlStateShowDetail, setControlStateShowDetail] = useState(false);

    const presentationChangeForPokedex = () => {
        setControlStateShowAllPokemons(!controlStateShowAllPokemons);
        setControlStateShowPokedex(!controlStateShowPokedex);
    };
    const presentationChangeForAllPokemons = () => {
        setControlStateShowAllPokemons(!controlStateShowAllPokemons);
        if (controlStateShowPokedex) {
            setControlStateShowPokedex(!controlStateShowPokedex);
        }
        if (controlStateShowDetail) {
            setControlStateShowDetail(!controlStateShowDetail);
        }
    };
    const presentationChangeForAllDetails = () => {
        setControlStateShowDetail(!controlStateShowDetail);
        setControlStateShowAllPokemons(false);
        if (controlStateShowPokedex) {
            setControlStateShowPokedex(!controlStateShowPokedex);
        }
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
                presentationChangeForPokedex={presentationChangeForPokedex}
                presentationChangeForAllPokemons={
                    presentationChangeForAllPokemons
                }
            />

            {controlStateShowAllPokemons ? (
                <PokemonListPage
                    presentationChangeForAllDetails={
                        presentationChangeForAllDetails
                    }
                />
            ) : (
                ''
            )}
            {/* <PokemonListPage
                presentationChangeForAllDetails={
                    presentationChangeForAllDetails
                }
            /> */}

            {controlStateShowPokedex ? (
                <PokedexPage
                    presentationChangeForAllDetails={
                        presentationChangeForAllDetails
                    }
                />
            ) : (
                ''
            )}

            {/* <PokedexPage
                presentationChangeForAllDetails={
                    presentationChangeForAllDetails
                }
            /> */}

            {controlStateShowDetail ? <PokemonDetailPage /> : ''}
            {/* <PokemonDetailPage /> */}
        </ContainerApp>
    );
}

export default App;
