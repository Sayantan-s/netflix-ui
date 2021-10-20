import styled, { css } from 'styled-components';
import { View } from '.';

const Stack = styled(View)`
    display: flex;
    ${({ direction, spacing }) => {
        switch (direction) {
            case 'vertical':
                return css`
                    flex-direction: column;
                    & > *:not(:first-child) {
                        margin-top: ${(p) => `${p.theme.space[spacing || 1]}rem`};
                    }
                `;
            case 'horizontal':
            default:
                return css`
                    & > *:not(:first-child) {
                        margin-left: ${(p) => `${p.theme.space[spacing || 1]}rem`};
                    }
                `;
        }
    }}
`;
export default Stack;
