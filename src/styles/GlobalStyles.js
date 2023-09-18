import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
/* Brand colors */

    --color-brand-900: #152458;
    --color-brand-800: #1C3075;
    --color-brand-700: #243C93;
    --color-brand-600: #2B48B0;
    --color-brand-500: #3253CD;
    --color-brand-400: #4F6CD4;
    --color-brand-300: #5E78D8;
    --color-brand-200: #6C84DB;
    --color-brand-100: #7B91DF;

    /* Grey */
    --color-grey-900:#2e2e2e;
    --color-grey-800:#484848;
    --color-grey-700:#636363;
    --color-grey-600:#808080;
    --color-grey-500:#9e9e9e;
    --color-grey-400:#bebebe;
    --color-grey-300:#dedede;
    --color-grey-200:#ffffff;

    /* Success */
    --color-success-600:  #147548;
    --color-success-500:  #198754;
   
    /* Danger */
    --color-danger-600: #ae2d2d;
    --color-danger-500: #c93535;

    /* Alert */
    --color-warning-500: #d29d4b;
    --color-warning-600: #cc922f;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}

/* html{
    background-color: var(--color-grey-900);
    color: var(--color-grey-200);
} */

/* html{
  filter: invert(1) hue-rotate(180deg)
} */
`;

export default GlobalStyles;
