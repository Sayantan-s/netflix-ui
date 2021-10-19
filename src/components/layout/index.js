import { Page } from 'components/library';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVHEIGHT_VALUE } from 'store/action-types';
import Header from './Header.component';

const Layout = ({ children }) => {
    const headerRef = useRef(0);

    const dispatch = useDispatch();

    const height = useSelector(state => state.navHeight);

    console.log(height)

    useEffect(() => {
        dispatch({ type: NAVHEIGHT_VALUE, payload: headerRef.current.offsetHeight });
    }, []);

    return (
        <>
            <Header ref={headerRef} />
            <Page as={'main'} gap={height}>{children}</Page>
        </>
    );
};

export default Layout;
