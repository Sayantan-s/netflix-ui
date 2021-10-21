import { View } from 'components/library';
import React from 'react';
import styled from 'styled-components';

const TvShows = () => {
    return <PageTVShows>Tv Shows</PageTVShows>;
};

export default TvShows;
const PageTVShows = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;