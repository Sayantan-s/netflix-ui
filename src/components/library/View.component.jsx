import styled, { css } from 'styled-components';

const View = styled.div`
    ${(props) =>
        props.isLayout &&
        css`
            max-width: ${(props) => props.theme.sizes['3xl']};
            padding: 0 2rem;
            margin: 0 auto;
            @media screen and (max-width: 1440px) {
                max-width: ${(props) => props.theme.sizes.bigTab};
            }
        `};
`;

export default View;
