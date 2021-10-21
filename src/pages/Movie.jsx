import { Add, Play, Rating } from 'components/icons';
import { Button, Flex, Heading, Stack, Text, View } from 'components/library';
import { ErrorMessage, Spinner } from 'components/utils';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { FETCH_MOVIES } from 'store/action-types';
import { request_handler } from 'store/actions/http_request.action';
import styled, { useTheme } from 'styled-components';

const Movie = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.movies.GET_MOVIE_BY_ID);

    const theme = useTheme();

    useEffect(() => {
        dispatch(
            request_handler({
                url: `/movie/${id}`,
                loading_type: FETCH_MOVIES.GET_MOVIE_BY_ID.LOADING,
                success_type: FETCH_MOVIES.GET_MOVIE_BY_ID.SUCCESS,
                error_type: FETCH_MOVIES.GET_MOVIE_BY_ID.ERROR
            })
        );
    }, []);

    const { title, overview, vote_average, runtime, genres, backdrop_path, adult } = data;

    const loadedUI = (
        <>
            <Flex isLayout className="page-content">
                <Stack direction={'vertical'} spacing={3} className="page-content--data">
                    {adult && <AdultTag>18+</AdultTag>}
                    <Heading as={'h6'} fontSize={'1.6rem'}>
                        Duration:{' '}
                        <Text as="span" color={theme.colors.text[2]} fontWeight={600}>
                            {Math.floor(runtime / 60)}h {runtime % 60 > 0 && `${runtime % 60}m` }
                        </Text>
                    </Heading>
                    <Flex as={'h6'} fontSize={'1.6rem'} className="page-content--data_rates">
                        <Rating size={24} stroke={`#FDB002`} />
                        <Text
                            as="span"
                            color={theme.colors.text[2]}
                            fontSize={5}
                            fontWeight={600}
                            className="page-content--data_rates--vote">
                            {vote_average?.toFixed(1)} &nbsp; &middot; &nbsp;
                        </Text>
                        <Flex>
                            {genres?.map(({ name }, id) => (
                                <Text as="span" key={name} color={theme.colors.text[2]}>
                                    &nbsp;{name} {id < genres?.length - 1 && <>&#x0007C;</>}
                                </Text>
                            ))}
                        </Flex>
                    </Flex>
                    <Heading fontWeight={600} className="page-content--data-title">
                        {title}
                    </Heading>
                    <Text
                        lineHeight={theme.lineHeights.body}
                        className="page-content--data-overview">
                        {overview}
                    </Text>
                    <View>
                        <InteractionButtonStack spacing={3}>
                            <Button minWidth="l" borderRadius={'3rem'} className="btn btn-1">
                                <Play stroke={theme.colors.text[0]} size={24} />
                                Watch
                            </Button>
                            <Button minWidth="l" borderRadius={'3rem'} className="btn btn-2">
                                <Add stroke={theme.colors.text[0]} size={24} />
                                Add List
                            </Button>
                        </InteractionButtonStack>
                    </View>
                </Stack>
            </Flex>
        </>
    );

    console.log(data);

    return (
        <MovieDetailsWrapper {...(data?.backdrop_path && { bg: backdrop_path })}>
            {loading ? (
                <Spinner color={theme.colors.danger[4]} />
            ) : data?.title ? (
                loadedUI
            ) : (
                <ErrorMessage as={'h5'}>{error}</ErrorMessage>
            )}
        </MovieDetailsWrapper>
    );
};

export default Movie;

const AdultTag = styled(Flex)`
    background-color: red;
    width: 3rem;
    height: 3rem;
    padding: 0%.3rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    font-size: 1.4rem;
    font-weight: 600;
    background-color: #e7c218;
    color: ${(props) => props.theme.colors.text[9]};
`;

const InteractionButtonStack = styled(Stack)`
    margin-top: 3rem;
    .btn {
        text-transform: uppercase;
        svg {
            margin-right: 1rem;
        }
        &-1 {
            background-color: ${(props) => props.theme.colors.danger[5]};
            box-shadow: 0px 5px 15px ${(props) => `${props.theme.colors.danger[5]}80`};
            transition: 0.3s all;
            &:hover {
                box-shadow: 0px 18px 20px ${(props) => `${props.theme.colors.danger[5]}30`};
                transform: translateY(-2px);
            }
        }
        &-2 {
            background-color: black;
        }
    }
`;

const MovieDetailsWrapper = styled(Flex)`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: radial-gradient(
            rgba(26, 26, 26, 0.5690651260504201) 6%,
            rgba(26, 26, 26, 0.8799894957983193) 90%,
            rgba(26, 26, 26, 1) 100%
        ),
        ${(props) => `url('https://image.tmdb.org/t/p/original${props?.bg}')`};
    .page-content {
        width: 100%;
        height: 100%;
        &--data {
            &-title {
                max-width: ${(props) => props.theme.sizes.tab};
            }
            &-overview {
                max-width: ${(props) => props.theme.sizes.l};
            }
            &_rates {
                &--vote {
                    margin-left: 1rem;
                }
            }
        }
    }
`;
