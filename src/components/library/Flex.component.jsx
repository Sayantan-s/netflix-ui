import styled from "styled-components";
import { View } from ".";

const Flex = styled(View)({
    display: "flex",
    alignItems: props => props.alignItems || "center"
})

export default Flex