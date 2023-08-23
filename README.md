<h1 align="center">Pokedex</h1>
<div align="center">

![funcionamento-site-gif](./pokedex/src/assets/images/site.gif)

Clique [aqui](https://project-pokedex-cyan.vercel.app/) para conferir o resultado final!

<p align="center"><strong>Status do Projeto:<br></strong> <i>Concluído</i> ✔</p>

</div>
<p align="center">
<span><strong>Tecnologias e Ferramentas utilizadas:</strong></span>
<br>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,react,styledcomponents,github,git,figma" style="height: 25px;"/>
  </a>
</p>

## Índice

-   [1. Resumo do Projeto](#1-resumo-do-projeto)
-   [2. Definição de Produto](#2-definição-de-produto)
-   [3. Protótipo](#3-protótipo)
-   [4. Instalação](#4-instalação)
-   [5. Inicialização](#5-inicialização)
-   [6. Tecnologias e Ferramentas Utilizadas](#6-tecnologias-e-ferramentas-utilizadas)
-   [7. Requisitos do Projeto](#7-requisitos-do-projeto)
-   [8. Desenvolvedora](#8-desenvolvedora)

## 1. Resumo do Projeto

A Pokedex é uma aplicação web que permite aos usuários explorar dados da API dos pokémons. O site exibe informações sobre vários pokémons e possibilita criar uma pokédex personalizada. Desenvolvido com tecnologias como JavaScript, React e Styled Components, o projeto oferece uma experiência interativa. Os usuários podem ver cards de pokémons na página inicial, onde podem acessar detalhes e adicionar pokémons à sua pokédex. A funcionalidade de paginação permite navegar por diferentes páginas de pokémons.

## 2. Definição de Produto

O Projeto Pokedex três páginas: **Home**, **Pokedex** e **Detalhes**.

### Home

Na **Home** é possível visualizar cards de todos os pokémons recebidos da [Poke Api](https://pokeapi.co/ 'Poke Api'), cada card de pokémon possui um botão para visualizar mais detalhes e outro botão capaz capturar este pokémon para a sua própria pokedex. A Home também possui um sistema de paginação, onde você pode navegar por mais páginas e escolher mais pokémons para a sua pokedex.

## Detalhes

O acesso a página de **Detalhes** pode ser feita tanto da Home quanto da Pokedex. Esta página conta com gifs de visualização do pokémon selecionado, informações sobre atritutos e movimentos. Ainda nesta página é possível adicionar o pokémon em questão na pokedex, bem como excluí-lo caso ele já esteja na sua pokedex.

## Pokedex

A página de **Pokedex** armazena todos os pokémons escolhidos pelo usuário. Caso o usuário atualize sua página os dados não serão perdidos, o usuário poderá visualizar seus pokémons capturados, e em sua home estará apenas os pokémons que ainda não foram escolhidos, permitindo que o usuário continue sua busca e captura de onde parou da última vez.

## 3. Protótipo

O protótipo de alta fidelidade foi fornecido pela Labenu, se preferir acessar direto pelo Figma, clique [aqui](<https://www.figma.com/file/YYsdsWeuXbw6guKcCX7NKH/Poked%C3%A9x-(Copy)?type=design&node-id=0-1&mode=design&t=Dh4YW9WZMILC1Cg5-0>), caso contrário acompanhe as imagens a seguir.

### Home

![Home](./pokedex/src/assets/images/home.png)

### Pokedex

![Pokedex](./pokedex/src/assets/images/pokedex.png)

### Detalhes

![Detalhes](./pokedex/src/assets/images/details.png)

## 4. Instalação

### Pré-requisitos:

-   Node.js
-   npm

Para instalar as dependências no diretório do seu projeto, execute o seguinte comando:

```
npm install
```

## 5. Inicialização

Para iniciar o aplicativo, execute o seguinte comando:

```
npm run start
```

## 6. Tecnologias e Ferramentas Utilizadas

Este site foi construído com:

-   JavaScript
-   React
-   Styled-Components
-   Axios
-   API
-   Chakra-UI
-   Figma

## 7. Requisitos do Projeto

-   **Gerais:**
    -   [✔] O site deve ter 3 páginas: Home, Pokedex e Detalhes;
    -   [✔] Projeto deve seguir o [design](https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?t=AEi3zEmWmarf1FbP-0 'design') proposto;
    -   [✔] O fluxo de trocas de páginas devem ser semelhante ao [fluxograma](https://www.figma.com/proto/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?page-id=0%3A1&node-id=2%3A2&viewport=358%2C197%2C0.27&scaling=scale-down&starting-point-node-id=2%3A2 'fluxograma');
    -   [✔] [Criar um readme](https://www.youtube.com/watch?v=1QKwP0SJK-c 'Crie um readme') para o projeto;
-   **Página Home:**
    -   [✔] Mostrar uma lista de Pokemons, contendo ao menos 20 Pokemons;
    -   [✔] Cada Pokemon será representado por um Card;
    -   [✔] Em cada card de Pokemon tem um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon;
    -   [✔] Header dessa página terá um botão para acessar a página da Pokedex
-   **Página Pokédex**
    -   [✔] Renderizar a lista de pokémons adicionados na pokedex;
    -   [✔] Em cada card de Pokemon deve ter um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon.
    -   [✔] Header deve ter um botão para voltar para a Home
    -   [✔] Não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex
-   **Página de Detalhes**
    -   [✔] Mostrar os detalhes do Pokemon selecionado, com informações descritas
    -   [✔] Header deve ter um botão para adicionar ou remover da Pokedex e outro para voltar a página home.

## 8. Desenvolvedora

Este projeto foi desenvolvido por:

**Amanda Polari** : [LinkedIn](https://www.linkedin.com/in/amandapolari/) | [GitHub](https://github.com/amandapolari)
