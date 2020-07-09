import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#6A4BC4';
const lightShades = '#F5F5F5';
const darkAccent = '#6A4BC4';
const darkShades = '#161616';

export const theme = {
  hoverColor: '#86E9D5',
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#FFDC57',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#FFFFFF',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 16,
  fontSizeExtraSmall: 14,
  fontSizeMedium: 18,
  fontSizeLarge: 48,
  fontSizeExtraLarge: 55,
  textColor: darkShades, // '#161616',
  textColorInverse: lightShades,
  textColorLite: '#4f4e4e',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Poppins',sans-serif",
  secondaryFontFamily: "'Nunito', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
  fontFamilyThin: " 'Poppins', sans-serif",
  headerColor: '#222239',
  lightColor: '#F7F9FD',
  darkPurple: '#121225',
  red: '#EE1D52',
};

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.03rem !important;
    font-size: 16px;
  }
  .title {
    font-family: ${theme.primaryFontFamily};
  }
  .button {
    font-family: ${theme.primaryFontFamily};
  }
  p {
    line-height: 1.5rem;
  }
  p, .title, .box {
    color: ${theme.textColor} !important;
  }
  .subtitle {
    color: ${lighten(0.06, theme.textColor)} !important;
  }
  .button.is-primary {
    background-color: ${theme.mainBrandColor};
    transition: background-color 0.2s ease;
    :hover {
      background-color: ${darken(0.06, theme.mainBrandColor)};
    }
  }
  .button.is-secondary {
    background-color: ${theme.lightAccent};
    transition: background-color 0.2s ease;
    color: #ffffff;
    :hover {
      background-color: ${darken(0.06, theme.lightAccent)};
    }
  }
  .button.is-link {
    background-color: ${theme.darkAccent};
    transition: background-color 0.2s ease;
    :hover {
      background-color: ${darken(0.06, theme.darkAccent)};
    }
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }
  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }
  .has-text-black {
    color: ${theme.darkShades} !important;
  }
`;

export default GlobalStyle;
