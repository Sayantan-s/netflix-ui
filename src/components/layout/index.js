import { Page } from 'components/library';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { NAVHEIGHT_VALUE } from 'store/action-types';
import Header from './Header.component';

const Layout = ({ children }) => {
    const headerRef = useRef(0);

    const dispatch = useDispatch();

    const location = useLocation();

    const height = useSelector((state) => state.navHeight);

    useEffect(() => {
        dispatch({ type: NAVHEIGHT_VALUE, payload: headerRef.current.offsetHeight });
    }, []);

    let hasSpace = false;

    if (location.pathname === '/newpopular') hasSpace = true;

    return (
        <>
            <Header ref={headerRef} />
            <Page as={'main'} gap={height} addSpace={hasSpace}>
                {children}
            </Page>
        </>
    );
};

export default Layout;
