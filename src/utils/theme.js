import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#6A4BC4';
const lightShades = '#F5F5F5';
const darkAccent = '#6A4BC4';
const darkShades = '#0A0A0A';

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
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#0A0B11',
  textColorInverse: lightShades,
  textColorLite: '#8B8989',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Poppins-Regular',sans-serif",
  secondaryFontFamily: "'Nunito-Regular', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
  fontFamilyThin: " 'Poppins', sans-serif",
  headerColor: '#222239',
  lightColor: '#F7F9FD',
  darkPurple: '#121225',
};

const GlobalStyle = createGlobalStyle`
  ${reset};
@font-face {
  font-family: 'Poppins-Regular';
  src: url('../fonts/Poppins-Regular.ttf');
  src: local('Poppins-Regular'), local('Poppins-Regular'),
       url('../fonts/Poppins-Regular.ttf') format('truetype'),
       url('../fonts/Poppins-Bold.ttf') format('truetype'),
       url('../fonts/Poppins-Light.ttf') format('truetype'),
       url('../fonts/Poppins-SemiBold.ttf') format('truetype'),
}
@font-face {
  font-family: 'Nunito-Regular';
  src: url('../fonts/Nunito-Regular.ttf');
  src: local('Nunito-Regular'), local('Nunito-Regular'),
       url('../fonts/Nunito-Regular.ttf') format('truetype'),
       url('../fonts/Nunito-Black.ttf') format('truetype'),
       url('../fonts/Nunito-Light.ttf') format('truetype'),
       url('../fonts/Nunito-Bold.ttf') format('truetype'),
       url('../fonts/Nunito-SemiBold.ttf') format('truetype'),
}

  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.03rem !important;
    font-size: 17px;
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
`;

export default GlobalStyle;
