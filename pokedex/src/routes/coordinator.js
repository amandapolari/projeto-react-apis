export const goToHome = (navegate) => {
    navegate('/');
};

export const goToPokedex = (navegate) => {
    navegate(`/pokedex`);
};

// COM path
export const goToDetails = (navegate, id) => {
    navegate(`/details/${id}`);
};

// SEM path
// export const goToDetails = (navegate) => {
//     navegate(`/details`);
// };
