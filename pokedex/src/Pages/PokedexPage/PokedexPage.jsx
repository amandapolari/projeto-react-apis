import React from 'react';
import {
    ContainerListCardPokedex,
    ContainerPokedexPage,
} from './PokedexPageStyle';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

const PokedexPage = ({ presentationChangeForAllDetails }) => {
    return (
        <ContainerPokedexPage>
            <p>[POKEDEX] POKEDEX PAGE</p>
            <p>Meus Pokémons</p>
            <ContainerListCardPokedex>
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
            </ContainerListCardPokedex>
        </ContainerPokedexPage>
    );
};

export default PokedexPage;
