import { Logo } from 'components/constants';
import { Gift, Notification, Search } from 'components/icons';
import { Flex, Link, Stack, View } from 'components/library';
import React, { forwardRef } from 'react';
import styled, { useTheme } from 'styled-components';

const Header = (_, ref) => {
    const theme = useTheme();

    return (
        <NavWrapper ref={ref}>
            <Navbar isLayout>
                <Flex as="nav">
                    <Logo />
                    <NavLinkStack>
                        {navLinks.map(({ to, name }) => (
                            <Link to={to} key={name} activeClassName="active" exact={true}>
                                {name}
                            </Link>
                        ))}
                    </NavLinkStack>
                </Flex>
                <Stack spacing={3}>
                    <Search stroke={theme.colors.text[0]} size={24} />
                    <Gift stroke={theme.colors.text[0]} size={24} />
                    <Notification stroke={theme.colors.text[0]} size={24} />
                </Stack>
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
