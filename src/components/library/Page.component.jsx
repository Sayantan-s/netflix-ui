import styled, { css } from 'styled-components';
import { View } from '.';

const Page = styled(View)`
    ${(props) =>
        props.addSpace &&
        css`
            padding-top: ${(props) => `${props.gap * 1.5 || 0}px`};
        `}
`;
export default Page;
