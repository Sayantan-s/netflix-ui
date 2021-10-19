import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(NavLink).attrs({ activeClassName: 'active' })`
    text-decoration: none;
    color : ${props => props.colors || props.theme.colors.text[0]};
    &.active{
        font-weight: 600;
    }
`

export default Link;