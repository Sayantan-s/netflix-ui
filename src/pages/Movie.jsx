import { Add, Play, Rating } from 'components/icons';
import { Button, Flex, Heading, Stack, Text, View } from 'components/library';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled, { useTheme } from 'styled-components';
import { http } from 'utils';

const Movie = () => {
    const params = useParams();

    const [movie, setMovie] = useState([]);

    const theme = useTheme();

    const id = params.id.split('_')[1];

    useEffect(() => {
        (async () => {
            const res = await http({
                url: `/movie/${id}`
            });
            setMovie(res);
        })();
    }, []);

    console.log(movie);

    const { title, overview, vote_average, runtime, genres } = movie;

    return (
        <MovieDetailsWrapper bg={movie.backdrop_path}>
            <Flex isLayout className="page-content">
                <Stack direction={'vertical'} spacing={3} className="page-content--data">
                    <Heading as={'h6'} fontSize={'1.6rem'}>
                        Duration: {runtime}m
                    </Heading>
                    <Flex as={'h6'} fontSize={'1.6rem'} className="page-content--data_rates">
                        <Rating size={24} stroke={`#FDB002`} />
                        <Text
                            as="span"
                            color={theme.colors.text[2]}
                            fontSize={5}
                            fontWeight={600}
                            className="page-content--data_rates--vote"
                        >
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
                        limited={4}
                        className="page-content--data-overview"
                    >
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
        </MovieDetailsWrapper>
    );
};

export default Movie;

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
