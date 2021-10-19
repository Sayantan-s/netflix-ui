import { Heading, Stack, View } from 'components/library'
import React from 'react'
import MovieDetailCard from './MovieDetailCard.component'

const MovieDetailRows = ({ heading, data }) => {

    return (
       <View>
           <Heading level={2}>
               {heading}
           </Heading>
           <Stack spacing={1} mt={1}>
                {
                    data?.map((movie) => (
                        <MovieDetailCard key={movie.id} data={movie}/>
                    ))
                }
            </Stack>
       </View>
    )
}

export default MovieDetailRows
