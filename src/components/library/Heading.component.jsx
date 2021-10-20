import styled, { css } from 'styled-components';

const Heading = styled.h1`
    margin: 0;
    padding: 0;
    line-height: 1.2;
    ${({ as }) => {
        switch (as) {
            case 'h1':
            default:
                return css`
                    font-weight: ${(props) => props.fontWeight || '700'};
                    font-size: ${(props) => props.fontSize || '9rem'};
                `;
            case 'h2':
                return css`
                    font-weight: ${(props) => props.fontWeight || '700'};
                    font-size: ${(props) => props.fontSize || '7rem'};
                `;
            case 'h3':
                return css`
                    font-weight: ${(props) => props.fontWeight || '600'};
                    font-size: ${(props) => props.fontSize || '5rem'};
                `;
            case 'h4':
                return css`
                    font-weight: ${(props) => props.fontWeight || '600'};
                    font-size: ${(props) => props.fontSize || '4rem'};
                `;

            case 'h5':
                return css`
                    font-weight: ${(props) => props.fontWeight || '500'};
                    font-size: ${(props) => props.fontSize || '2.5rem'};
                `;

            case 'h6':
                return css`
                    font-weight: ${(props) => props.fontWeight || '500'};
                    font-size: ${(props) => props.fontSize || '1rem'};
                `;
        }
    }}
`;

export default Heading;
