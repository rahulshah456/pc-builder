
export const formatLocaleCurrency = (value) => {
    const currency = Number(value);
    return currency.toLocaleString();
}

export const getComponentThumbnail = (header) => {
    return `https://images.versus.io/objects${header.replace('variety','medium')}`;
}

export const generateInitialComponents = () => {

}