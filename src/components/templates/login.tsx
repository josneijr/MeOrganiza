import React, { useState } from 'react';
import LoginForm from 'components/organisms/login-form';
import SignupForm from 'components/organisms/signup-form';
import Logo from 'components/atoms/logo';
import styled from 'styled-components';
import colors from 'components/atoms/colors';
import Button from 'components/atoms/button';

interface MyFormValues {
    name: string;
    email: string;
    password: string;
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

const StyledContent = styled.form`
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
    const [formValues, setFormValues] = useState<MyFormValues>({
        name: "",
        email: "",
        password: ""
    });

    const switchSignup = (v: React.MouseEvent<HTMLElement, MouseEvent>) => {
        v.preventDefault();
        setIsSignup(!isSignup);
    };

    const updateValue = (name: string, value: string) => {
        setFormValues({
            ...formValues,
            [name]: value
        });
    }

    const sendLogin = (v: React.FormEvent) => {
        v.preventDefault();
        console.log(formValues);
    }

    return (
        <StyledFrame>
            <StyledLogo>
                <Logo />
            </StyledLogo>
            <StyledContent onSubmit={f => sendLogin(f)}>
                {
                    isSignup
                        ? <SignupForm handleChange={updateValue} />
                        : <LoginForm handleChange={updateValue} />
                }
                <Button primary type="submit" disabled={true}>
                    {isSignup ? "sign up" : "login"}
                </Button>
                <Button secondary onClick={v => switchSignup(v)}>
                    {isSignup ? "cancel" : "sign up"}
                </Button>
            </StyledContent>
        </StyledFrame>
    );
}

export default LoginTemplate;