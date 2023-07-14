import React from 'react';
import {
    ContainerImgBack,
    ContainerImgFront,
    ContainerListCardDetails,
    ContainerMoves,
    ContainerPokemonDetailPage,
    ContainerStats,
    ContainerTypes,
} from './PokemonDetailPageStyle';

const PokemonDetailPage = () => {
    return (
        <ContainerPokemonDetailPage>
            <p>[PÁGINA DE DETALHES] POKEMON DETAIL PAGE</p>
            <ContainerListCardDetails>
                <ContainerImgFront>Imagem Frontal</ContainerImgFront>
                <ContainerImgBack>Imagem Posterior</ContainerImgBack>
                <ContainerStats>
                    <p>HP:</p>
                    <p>attack:</p>
                    <p>defense:</p>
                    <p>special-attack:</p>
                    <p>special-defense:</p>
                    <p>speed:</p>
                </ContainerStats>
                <ContainerTypes>
                    <p>type 1:</p>
                    <p>type 2:</p>
                </ContainerTypes>
                <ContainerMoves>
                    <p>Moves</p>
                    <p>move name 1:</p>
                    <p>move name 2:</p>
                    <p>move name 3:</p>
                    <p>move name 4:</p>
                </ContainerMoves>
            </ContainerListCardDetails>
        </ContainerPokemonDetailPage>
    );
};

export default PokemonDetailPage;
