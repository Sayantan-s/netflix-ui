import styled, { css } from 'styled-components';
import { styleUtilities } from 'utils';

const View = styled.div`
    ${(props) => props.isLayout && css`
        max-width: ${props => props.theme.sizes.xxl};
        margin: 0 auto;
    `};
    ${styleUtilities}
`;

export default View;
