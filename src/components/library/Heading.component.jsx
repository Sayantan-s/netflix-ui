import React, { forwardRef } from 'react';

const Heading = ({ level, as: Component = `h${level}`, children, ...rest }, ref) => {
    return (
        <Component {...rest} ref={ref}>
            {children}
        </Component>
    );
};

export default forwardRef(Heading);
