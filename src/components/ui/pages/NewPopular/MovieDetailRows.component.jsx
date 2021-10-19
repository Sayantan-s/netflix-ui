import { Heading, Stack, View } from 'components/library'
import React from 'react'

const MovieDetailRows = ({ heading }) => {
    return (
       <View>
           <Heading level={2}>
               {heading}
           </Heading>
           <Stack spacing={1}>
                
            </Stack>
       </View>
    )
}

export default MovieDetailRows
