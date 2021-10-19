import { View } from 'components/library';
import React from 'react';
import styled from 'styled-components';

const NewPopular = () => {
    return <StyledNewAndPopular>NewPopular</StyledNewAndPopular>;
};

export default NewPopular;

const StyledNewAndPopular = styled(View)`
    max-width: calc(192rem - (192rem - ${(props) => props.theme.sizes.xxl})/2);
    float: right;
    width: 100%;
    background-color: red;
`;
