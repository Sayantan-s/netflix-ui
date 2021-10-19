import styled from 'styled-components'
//import { styleUtilities } from 'utils';
import { View } from '.'

const Page = styled(View)`
    margin-top: ${props => `${props.gap * 1.5 || 0}px`};
`
export default Page;