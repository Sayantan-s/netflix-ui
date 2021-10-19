import { Stack} from 'components/library';
import { MovieDetailRows } from 'components/ui/pages/NewPopular';
import React from 'react';
import styled from 'styled-components';

const NewPopular = () => {
    return (
        <StyledNewAndPopular direction="vertical" spacing={2}>
            <MovieDetailRows heading="New on Netflix" />
            <MovieDetailRows heading="Coming This Week" />
            <MovieDetailRows heading="Coming Next Week" />
        </StyledNewAndPopular>
    );
};

export default NewPopular;

const StyledNewAndPopular = styled(Stack)`
    max-width: calc(192rem - (192rem - ${(props) => props.theme.sizes.xxl}) / 2);
    float: right;
    width: 100%;
`;
