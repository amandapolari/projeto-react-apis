export const getColors = (type) => {
    switch (type) {
        case 'bug':
            return '#76A866';
        case 'dark':
            return '#A79FA6';
        case 'dragon':
            return '#004170';
        case 'electric':
            return '#F2E7AA';
        case 'fairy':
            return '#E9CDEA';
        case 'fighting':
            return '#D88EAB';
        case 'fire':
            return '#EAAB7D';
        case 'flying':
            return '#A4B8C9';
        case 'ghost':
            return '#9B9FB9';
        case 'grass':
            return '#729F92';
        case 'ground':
            return '#E1A48A';
        case 'ice':
            return '#B5DCD5';
        case 'normal':
            return '#BF9762';
        case 'poison':
            return '#C5A9C4';
        case 'psychic':
            return '#F3A9A9';
        case 'rock':
            return '#D2CAB3';
        case 'steel':
            return '#C8C8C8';
        case 'water':
            return '#71C3FF';
        default:
            return '';
    }
};
