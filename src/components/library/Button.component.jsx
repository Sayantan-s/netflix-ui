import styled, { css } from 'styled-components';

const Button = styled.button`
    border-radius: ${(props) => props.borderRadius};
    font-family: 'Inter', sans-serif;
    outline: none;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color || props.theme.colors.text[1]};
    background-color: ${(props) => props.bg || props.theme.colors.danger[5]};
    font-weight: ${(props) => props.fontWeight || 600};
    ${(props) => {
        if (props.type === 'icon') {
            return IconButtonUtils;
        }
        return NormalButtonUtils;
    }}
`;

const IconButtonUtils = css`
    width: ${(props) => props.size | '2rem'};
    height: ${(props) => props.size | '2rem'};
    padding: ${(props) => props.p | '0.8rem'};
`;

const NormalButtonUtils = css`
    ${(props) => {
        switch (props.minWidth) {
            case 'sm':
                return css`
                    min-width: 8rem;
                    padding: 0.5rem 0.8rem;
                `;
            case 'md':
                return css`
                    min-width: 12rem;
                    padding: 0.8rem 1rem;
                `;
            case 'l':
                return css`
                    min-width: 15rem;
                    padding: 1.4rem 1.6rem;
                `;
            default:
                return 'auto';
        }
    }};
`;

export default Button;
