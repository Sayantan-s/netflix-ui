import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const Heading = ({ children, ...rest }, ref) => {
    return (
        <Component {...rest} ref={ref}>
            {children}
        </Component>
    );
};

export default forwardRef(Heading);

const Component = styled.h1`
${({ level }) => {
    switch(level){
        case 1:
            return css`

            `
    }
}}
`