import { View } from 'components/library';
import React from 'react';
import styled from 'styled-components';

const Movies = () => {
    return <PageMovie>Movies</PageMovie>;
};

export default Movies;

const PageMovie = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
