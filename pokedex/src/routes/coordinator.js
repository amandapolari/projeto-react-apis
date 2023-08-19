export const goToHome = (navegate) => {
    navegate('/');
};

export const goToPokedex = (navegate) => {
    navegate(`/pokedex`);
};

// COM path
export const goToDetails = (navegate, name) => {
    navegate(`/details/${name}`);
};

// SEM path
// export const goToDetails = (navegate) => {
//     navegate(`/details`);
// };
