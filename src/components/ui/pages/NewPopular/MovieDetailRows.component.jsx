import { Flex, Heading, Stack, View } from 'components/library';
import { ErrorMessage, Spinner } from 'components/utils';
import React from 'react';
import styled, { useTheme } from 'styled-components';
import MovieDetailCard from './MovieDetailCard.component';

const MovieDetailRows = ({ heading, state: { data, loading, error } }) => {

    const theme = useTheme();

    return (
        <Row>
            <Heading as={'h5'} fontWeight={600} fontSize={'2.2rem'}>
                {heading}
            </Heading>
            <MovieStack spacing={2}>
                {loading ? (
                    <Spinner color={theme.colors.danger[4]} />
                ) : data?.results ? (
                    data?.results?.map((movie) => <MovieDetailCard key={movie.id} data={movie} />)
                ) : (
                    <ErrorWrapper>
                        <ErrorMessage fontSize={'2rem'} as={'h5'}>
                            {error}
                        </ErrorMessage>
                    </ErrorWrapper>
                )}
            </MovieStack>
        </Row>
    );
};

export default MovieDetailRows;

const Row = styled(View)`
    width: 100%;
`;

const ErrorWrapper = styled(Flex)`
    width: 100%;
    height: inherit;
    justify-content: center;
    align-items: center;
`;

const MovieStack = styled(Stack)`
    margin-top: 1.5rem;
    position: relative;
    z-index: 2;
    min-height: 24.5rem;
    &::after {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background: rgb(26, 26, 26);
        background: -moz-linear-gradient(
            93deg,
            rgba(26, 26, 26, 0) 0%,
            rgba(26, 26, 26, 0.4458158263305322) 71%,
            rgba(26, 26, 26, 0.6755077030812324) 91%
        );
        background: -webkit-linear-gradient(
            93deg,
            rgba(26, 26, 26, 0) 0%,
            rgba(26, 26, 26, 0.4458158263305322) 71%,
            rgba(26, 26, 26, 0.6755077030812324) 91%
        );
        background: linear-gradient(
            93deg,
            rgba(26, 26, 26, 0) 0%,
            rgba(26, 26, 26, 0.4458158263305322) 71%,
            rgba(26, 26, 26, 0.6755077030812324) 91%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1a1a1a",endColorstr="#1a1a1a",GradientType=1);
    }
`;
