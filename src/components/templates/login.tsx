import React, { useState } from 'react';
import LoginForm from 'components/organisms/loginForm';
import SignupForm from 'components/organisms/signupForm';
import Logo from 'components/atoms/logo';
import styled from 'styled-components';
import colors from 'components/atoms/colors';
import Button from 'components/atoms/button';

interface StyledBackgroundProps {
    moveTo?: string
}

const StyledFrame = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: [logo] 0.2fr [content] 0.8fr;
    align-items: start;
`;

const StyledLogo = styled.div`
    grid-column: logo;
    height: 100%;
    width: 100%;
`;

const StyledContent = styled.div`
    grid-column: content;
    display: grid;
    justify-items: center; 
    align-content: center;
    grid-row-gap: 10vh;
    width: 100%;
    height: 100%;
    background-color: ${colors.$background};
`;

const LoginTemplate: React.FC = () => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <StyledFrame>
            <StyledLogo>
                <Logo />
            </StyledLogo>
            <StyledContent>
                {
                    isSignup ? <SignupForm /> : <LoginForm />
                }
                <Button primary type="submit">
                    {isSignup ? "sign up" : "login"}
                </Button>
                <Button secondary onClick={v => setIsSignup(!isSignup)}>
                    {isSignup ? "cancel" : "sign up"}
                </Button>
            </StyledContent>
        </StyledFrame>
    );
}

export default LoginTemplate;