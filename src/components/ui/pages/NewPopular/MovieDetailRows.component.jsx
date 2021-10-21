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
            <MovieStack>
                {loading ? (
                    <Spinner color={theme.colors.danger[4]} />
                ) : data?.results ? (
                    <Stack spacing={2}>
                        {data?.results?.map((movie) => (
                            <MovieDetailCard key={movie.id} data={movie} />
                        ))}
                    </Stack>
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

const MovieStack = styled(Flex)`
    margin-top: 1.5rem;
    min-height: 24.5rem;
    padding-bottom: 1rem;
`;
