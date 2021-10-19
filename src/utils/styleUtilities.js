import { css } from "styled-components";

const styleUtilities = css`
    ${props => console.log(props)}
    padding: ${props => `${props.p}rem`};
    margin: ${props => `${props.m}rem`};
    margin-top: ${props => `${props.mt}rem`};
    border-radius: ${props => `${props.theme.radii[props.radii] || 0}px`};
`
export default styleUtilities;