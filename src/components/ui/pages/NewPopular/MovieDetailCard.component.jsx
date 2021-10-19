import { Flex, Image, Text, View } from 'components/library';
import React from 'react';
import { useTheme } from 'styled-components';

const MovieDetailCard = ({ data: { poster_path, overview } }) => {
    const theme = useTheme();

    return (
        <View>
            <Image
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                w={28}
                h={18}
                alt="user_profile"
                radii={3}
            />
            <View p={1}>
                <Flex>
                    <Text color={theme.colors.text[4]} limited={2} fontSize={2}>
                        {overview}
                    </Text>
                </Flex>
            </View>
        </View>
    );
};

export default MovieDetailCard;
