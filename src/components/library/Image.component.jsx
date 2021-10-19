import React from 'react';
import styled from 'styled-components';
import { View } from '.';

const Image = ({ src, alt, ...rest }) => {
    return (
        <ImgWrap {...rest}>
            <img src={src} alt={'img_XX' || alt} />
        </ImgWrap>
    );
};

export default Image;

const ImgWrap = styled(View)`
    position: relative;
    overflow: hidden;
    width: ${(props) => `${props.w}rem`};
    height: ${(props) => `${props.h}rem`};
    img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;
