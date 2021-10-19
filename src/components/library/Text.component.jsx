import styled, { css } from 'styled-components';

const Text = styled.p`
    ${({ variant }) => {
        switch (variant) {
            case 'disclaimer':
                return css`
                    color: ${(props) => props.theme.colors.text[6]};
                    font-size: ${(props) => `${props.theme.fontSizes[3]}rem`};
                    font-weight: 500;
                `;
            case 'error':
                return css`
                    color: ${(props) => props.theme.colors.danger[3]};
                    font-size: ${(props) => `${props.theme.fontSizes[2]}rem`};
                    font-weight: 400;
                `;
            default:
                return css`
                    color: ${(props) => props.color || props.theme.colors.text[1]};
                    font-size: ${(props) =>
                        `${props.theme.fontSizes[props.fontSize] || props.theme.fontSizes[4]}rem`};
                    font-weight: 400;
                `;
        }
    }}
    ${(props) =>
        props.limited &&
        css`
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: ${(props) => props.limited || 2};
            -webkit-box-orient: vertical;
        `}
`;

export default Text;

//text-overflow: ellipsis;
