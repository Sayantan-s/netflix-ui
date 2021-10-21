import { View } from 'components/library';
import React from 'react';
import styled from 'styled-components';

const MyList = () => {
    return <PageList>MyList</PageList>;
};

export default MyList;
const PageList = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
