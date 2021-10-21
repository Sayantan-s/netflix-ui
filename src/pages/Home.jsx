import { Button, Flex, Heading, Stack, TextInput, View } from 'components/library';
import { useInput } from 'hooks';
import React from 'react';
import styled from 'styled-components';

const Home = () => {
    const [email, handleEmail] = useInput('');

    return (
        <BgWrap bg="/homeBg.jpg">
            <CTA>
                <Content direction="vertical" spacing={1}>
                    <Heading as="h5" className="heading heading-1" fontWeight={700}>
                        Watch anywhere. Cancel Anytime.
                    </Heading>
                    <Heading as="h2" className="heading heading-2">
                        Unlimited movies,
                        <br /> TV shows, and more.
                    </Heading>
                    <View className="email">
                        <Form as="form" onClick={(eve) => eve.preventDefault()}>
                            <TextInput
                                type="text"
                                placeholder="E-mail address"
                                value={email}
                                onChange={handleEmail}
                            />
                            <Button minWidth="l">Try 30 days for free</Button>
                        </Form>
                    </View>
                </Content>
            </CTA>
        </BgWrap>
    );
};

export default Home;

const BgWrap = styled(View)`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-image: linear-gradient(
            222deg,
            rgba(26, 26, 26, 0.2777485994397759) 0%,
            rgba(26, 26, 26, 1) 100%
        ),
        ${(props) => `url('${props?.bg}')`};
`;

const CTA = styled(View)`
    max-width: 1300px;
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
`;

const Content = styled(Stack)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: ${(props) => `${props.addSpace * 2 || 0}px`};
    .heading {
        width: 100%;
        text-align: center;

        &-1 {
            color: ${(props) => `${props.theme.colors.text[4]}80`};
        }
    }
    .email {
        margin: 0 auto;
    }
`;

const Form = styled(Flex)`
    align-items: stretch;
    margin-top: 3rem;
    border-radius: 1rem;
    overflow: hidden;
    width: 100%;
    input {
        background-color: ${(props) => `${props.theme.colors.text[7]}80`};
        padding: 1.8rem;
    }
`;
