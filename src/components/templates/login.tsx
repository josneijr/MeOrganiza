import React, { useState } from 'react';
import LoginForm from 'components/organisms/loginForm';
import SignupForm from 'components/organisms/signupForm';
import StyleLogo from 'components/atoms/logo';
import styled from 'styled-components';
import colors from 'components/atoms/colors';
import Button from 'components/atoms/button';

interface StyledBackgroundProps {
    moveTo?: string
}

const StyledBackground = styled.div<StyledBackgroundProps>`

    position: absolute;
    transform: translateX(${p => {
        switch (p.moveTo) {
            case 'right':
                return '15vw';
            case 'left':
                return '-15vw';
            default:
                return '0';
        }
    }});
`;

const StyledLogin = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
`;

const StyledForm = styled.div`
    grid-column: 2;
    width: 100%;
    height: 100%;
    background-color: ${colors.$background};
`;

const LoginTemplate: React.FC = () => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <StyledLogin>
            <StyleLogo />
            <StyledForm>
                {
                    isSignup ? <SignupForm /> : <LoginForm />
                }
                <Button primary type="submit">
                    {isSignup ? "sign up" : "login"}
                </Button>
                <Button secondary onClick={v => setIsSignup(!isSignup)}>
                    {isSignup ? "cancel" : "sign up"}
                </Button>
            </StyledForm>
        </StyledLogin>
    );
}

export default LoginTemplate;