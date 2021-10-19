import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    *{
        padding: 0;
        margin : 0;
        box-sizing: border-box;
    }
    html{
            font-size: 62.5%;
    }
    body{
            font-size: 1.6rem;
            font-family: 'Inter', sans-serif;
            color : ${props => props.theme.colors.text[0]};
            background-color : ${props => props.theme.colors.background};
    }
`;
