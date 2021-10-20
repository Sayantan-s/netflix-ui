import { Rating } from 'components/icons';
import { Flex, Image, Text, View, Link, Stack } from 'components/library';
import React from 'react';
import styled, { useTheme } from 'styled-components';

const MovieDetailCard = ({
    data: { poster_path, overview, release_date, id, vote_average, original_title }
}) => {
    const theme = useTheme();

    return (
        <Link to={'movies/' + original_title + '_' + id}>
            <MovieCard>
                <Image
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    w={27}
                    h={17}
                    alt="user_profile"
                    radii={3}
                    className="img"
                />
                <MovieCardContent>
                    <Flex className="content-main">
                        <Text
                            color={theme.colors.text[4]}
                            lineHeight={theme.lineHeights.body}
                            limited={2}
                            fontSize={2}
                            className="content-main--overview"
                        >
                            {overview}
                        </Text>
                        <Text
                            className="content-main--dots"
                            color={theme.colors.text[4]}
                            limited={2}
                            fontSize={2}
                            as="span"
                        >
                            ...
                        </Text>
                    </Flex>
                    <Flex className="content-utils">
                        <Stack spacing={0} className="content-utils_stack">
                            <Rating size={13.5} stroke={`#FDB002`} />
                            <Text
                                as="span"
                                color={theme.colors.text[4]}
                                fontSize={2}
                                className="content-utils_stack--vote"
                            >
                                {vote_average.toFixed(1)} &nbsp; &middot;
                            </Text>
                        </Stack>
                        &nbsp;&nbsp;
                        <Text as="span" color={theme.colors.text[4]} fontSize={2}>
                            {release_date.split('-')[0]}
                        </Text>
                    </Flex>
                </MovieCardContent>
            </MovieCard>
        </Link>
    );
};

export default MovieDetailCard;

const MovieCard = styled(View)`
    img {
        border-radius: 5px;
    }
`;

const MovieCardContent = styled(View)`
    padding: 0.2rem 0.8rem;
    .content {
        &-main {
            align-items: flex-end;
            &--overview {
                margin-top: 1rem;
                position: relative;
                flex: 0.94;
                &::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 100;
                    width: 100%;
                    height: 100%;
                    background: rgb(26, 26, 26);
                    background: -moz-linear-gradient(
                        151deg,
                        rgba(26, 26, 26, 0) 0%,
                        rgba(26, 26, 26, 0.4458158263305322) 71%,
                        rgba(26, 26, 26, 1) 91%,
                        rgba(26, 26, 26, 1) 96%,
                        rgba(26, 26, 26, 1) 100%,
                        rgba(26, 26, 26, 1) 100%
                    );
                    background: -webkit-linear-gradient(
                        151deg,
                        rgba(26, 26, 26, 0) 0%,
                        rgba(26, 26, 26, 0.4458158263305322) 71%,
                        rgba(26, 26, 26, 1) 91%,
                        rgba(26, 26, 26, 1) 96%,
                        rgba(26, 26, 26, 1) 100%,
                        rgba(26, 26, 26, 1) 100%
                    );
                    background: linear-gradient(
                        151deg,
                        rgba(26, 26, 26, 0) 0%,
                        rgba(26, 26, 26, 0.4458158263305322) 71%,
                        rgba(26, 26, 26, 1) 91%,
                        rgba(26, 26, 26, 1) 96%,
                        rgba(26, 26, 26, 1) 100%,
                        rgba(26, 26, 26, 1) 100%
                    );
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1a1a1a",endColorstr="#1a1a1a",GradientType=1);
                }
            }
            &--dots {
                flex: 0.06;
                font-size: 1.8rem;
            }
        }
        &-utils {
            margin-top: 0.5rem;
            &_stack {
                &--vote {
                    font-weight: 700;
                }
            }
            & > *:last-child {
                font-weight: 500;
            }
        }
    }
`;
