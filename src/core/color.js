import theme from 'styled-theming';

export const blueColor = '#0072ff';
export const accentColor = '#6927ff';
export const reddishColor = '#ff6d6d';

export const lightColor = '#F6F6F6';
export const lightColorPrimary = '#F0F0F0';
export const lightColorVariant = '#DDDDDD';

export const darkColor = '#222831';
export const darkColorPrimary = '#393E46';
export const darkColorVariant = '#414141';

export const whiteColor = '#fff';
export const blackColor = '#000';

export const primaryThemeColor = theme('theme', {
    light: darkColor,
    dark: darkColorPrimary
});

export const secondaryThemeColor = theme('theme', {
    light: darkColorPrimary,
    dark: darkColorVariant
});

export const backgroundThemeColor = theme('theme', {
  light: lightColor,
  dark: darkColor,
});

export const textThemeColor = theme('theme', {
  light: blackColor,
  dark: lightColorVariant,
});

export const textThemeColorInvert = theme('theme', {
    light: whiteColor,
    dark: blackColor,
});

export const rigHoverThemeColor = theme('theme', {
    light: lightColorVariant,
    dark: darkColorPrimary,
});

export const invoiceThemeColor = theme('theme', {
    light: whiteColor,
    dark: darkColorPrimary,
});

export const invoiceTableHeaderBg = theme('theme', {
    light: blackColor,
    dark: whiteColor,
});

export const invoiceTableBorderColor = theme('theme', {
  light: darkColorVariant,
  dark: lightColorVariant,
});
