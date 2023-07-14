import React from 'react';
import {
    ContainerListCardPokemon,
    ContainerPokemonListPage,
} from './PokemonListPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

const PokemonListPage = ({ presentationChangeForAllDetails }) => {
    return (
        <ContainerPokemonListPage>
            <p>[HOME] POKEMON LIST PAGE</p>
            <p>Todos os Pokémons</p>
            <ContainerListCardPokemon>
                <PokemonCard
                    presentationChangeForAllDetails={
                        presentationChangeForAllDetails
                    }
                />
                <PokemonCard
                    presentationChangeForAllDetails={
                        presentationChangeForAllDetails
                    }
                />
                <PokemonCard
                    presentationChangeForAllDetails={
                        presentationChangeForAllDetails
                    }
                />
                <PokemonCard
                    presentationChangeForAllDetails={
                        presentationChangeForAllDetails
                    }
                />
                <PokemonCard
                    presentationChangeForAllDetails={
                        presentationChangeForAllDetails
                    }
                />
                <PokemonCard
                    presentationChangeForAllDetails={
                        presentationChangeForAllDetails
                    }
                />
            </ContainerListCardPokemon>
        </ContainerPokemonListPage>
    );
};

export default PokemonListPage;
