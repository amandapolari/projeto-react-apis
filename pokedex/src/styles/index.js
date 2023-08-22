import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                add: {
                    bg: 'white.500',
                    color: 'black.500',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    _hover: {
                        bg: 'gray.500',
                        transition: 'bg 0.3s ease-in-out',
                    },
                },
                delete: {
                    bg: 'red.500',
                    color: 'white.500',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    _hover: {
                        bg: 'red.600',
                        transition: 'bg 0.3s ease-in-out',
                    },
                },
            },
        },
    },
    colors: {
        white: {
            500: '#FFF',
        },
        black: {
            500: '#0F0F0F',
        },
        gray: {
            500: '#F0F0F0',
        },
        red: {
            500: '#FF6262',
            600: '#FF8B8B',
        },
        orange: {
            500: '#FF7C2D',
        },
    },
});
