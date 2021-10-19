import { css } from "styled-components";

const styleUtilities = css`
    ${props => console.log(props)}
    padding: ${props => `${props.p || 0}rem`};
    margin: ${props => `${props.m || 0}rem`};
`
export default styleUtilities;