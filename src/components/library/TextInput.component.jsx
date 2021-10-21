import styled from 'styled-components';

const TextField = styled.input`
    outline: none;
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    border: none;
    color: ${(props) => props.theme.colors.text[5]};
    background-color: transparent;
    ::placeholder {
        color: ${(props) => props.theme.colors.text[6]};
    }
`;

export default TextField;
