import React from 'react';

const View = ({ as: Component = 'div', children, ...rest }) => {
    return <Component {...rest}>{children}</Component>;
};

export default View;
