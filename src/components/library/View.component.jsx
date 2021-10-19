import styled, { css } from 'styled-components';

const View = styled.div`
    ${(props) => props.isLayout && css`
        max-width: ${props => props.theme.sizes.xxl};
        margin: 0 auto;
    `};
`;

export default View;
