import { Logo } from 'components/constants';
import { ArrowDown, Gift, Notification, Search, Setting } from 'components/icons';
import { Flex, Link, Stack, View, Image } from 'components/library';
import { useWindowHasScrolled, useWindowResize } from 'hooks';
import React, { forwardRef } from 'react';
import styled, { css, useTheme } from 'styled-components';

const Header = (_, ref) => {
    const theme = useTheme();

    const windowHasScrolled = useWindowHasScrolled();

    const width = useWindowResize();

    console.log(width);

    return (
        <NavWrapper ref={ref} scrolled={windowHasScrolled}>
            <Navbar isLayout>
                <Flex as="nav">
                    <Link to="/">
                        <Logo />
                    </Link>
                   {width > 768 && <NavLinkStack spacing={3}>
                        {navLinks.map(({ to, name }) => (
                            <Link to={to} key={name} activeClassName="active" exact={true}>
                                {name}
                            </Link>
                        ))}
                    </NavLinkStack>}
                </Flex>
                {width < 1024 ? (
                    <Avatar src="/Avatar.png" w={4} height={4} alt="user_profile" />
                ) : (
                    <Stack spacing={4} alignItems="center">
                        <Search stroke={theme.colors.text[0]} size={24} />
                        <Gift stroke={theme.colors.text[0]} size={24} />
                        <Notification stroke={theme.colors.text[0]} size={24} />
                        <Stack spacing={1}>
                            <Avatar src="/Avatar.png" w={4} height={4} alt="user_profile" />
                            <ArrowDown stroke={theme.colors.text[0]} size={20} />
                        </Stack>
                        <Stack spacing={1}>
                            <Setting stroke={theme.colors.text[0]} size={24} />
                            <ArrowDown stroke={theme.colors.text[0]} size={20} />
                        </Stack>
                    </Stack>
                )}
            </Navbar>
        </NavWrapper>
    );
};

export default forwardRef(Header);

const NavWrapper = styled(View)`
    padding: 2.5rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 500;
    ${(props) => {
        if (props.scrolled) {
            return css`
                background-color: ${(props) => `${props.theme.colors.text[9]}50`};
                box-shadow: 0px 5px 15px ${(props) => `${props.theme.colors.text[9]}10`};
                ${() => {
                    if (navigator.userAgent.indexOf('Chrome') !== -1) {
                        return css`
                            backdrop-filter: blur(15px);
                        `;
                    }
                }}
            `;
        }
    }}
`;

const Avatar = styled(Image)`
    background: -webkit-linear-gradient(
        260deg,
        rgba(26, 26, 26, 0.2777485994397759) 0%,
        rgba(86, 118, 129, 0.7567401960784313) 100%
    );
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    @media screen and (max-width: 768px) {
        border-radius: 50%;
        width: 5rem;
        height: 5rem;
    }
`;

const Navbar = styled(Flex)`
    justify-content: space-between;
`;

const NavLinkStack = styled(Stack)`
    margin-left: 6rem;
`;

const navLinks = [
    {
        to: '/',
        name: 'Home'
    },
    {
        to: '/tvshows',
        name: 'TV Shows'
    },
    {
        to: '/movies',
        name: 'Movies'
    },
    {
        to: '/newpopular',
        name: 'New & Popular'
    },
    {
        to: '/mylist',
        name: 'My List'
    }
];
