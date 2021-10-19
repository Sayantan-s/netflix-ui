import { Logo } from 'components/constants';
import { ArrowDown, Gift, Notification, Search, Setting } from 'components/icons';
import { Flex, Link, Stack, View, Image as Avatar } from 'components/library';
import React, { forwardRef } from 'react';
import styled, { useTheme } from 'styled-components';

const Header = (_, ref) => {
    const theme = useTheme();

    return (
        <NavWrapper ref={ref}>
            <Navbar isLayout>
                <Flex as="nav">
                    <Logo />
                    <NavLinkStack spacing={3}>
                        {navLinks.map(({ to, name }) => (
                            <Link to={to} key={name} activeClassName="active" exact={true}>
                                {name}
                            </Link>
                        ))}
                    </NavLinkStack>
                </Flex>
                <Stack spacing={4}>
                    <Search stroke={theme.colors.text[0]} size={24} />
                    <Gift stroke={theme.colors.text[0]} size={24} />
                    <Notification stroke={theme.colors.text[0]} size={24} />
                    <Stack spacing={1}>
                        <Avatar src="/Avatar.png" w={4} height={4} alt="user_profile" />
                        <ArrowDown stroke={theme.colors.text[0]} size={24}/>
                    </Stack>
                    <Stack spacing={1}>
                        <Setting stroke={theme.colors.text[0]} size={24} />
                        <ArrowDown stroke={theme.colors.text[0]} size={24}/>
                    </Stack>
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
