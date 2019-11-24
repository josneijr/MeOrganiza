import React from 'react';
import LoginForm from 'components/organisms/loginForm';
import styled from 'styled-components';
import colors from 'components/atoms/colors';

interface StyledBackgroundProps {
    moveTo?: string
}

const StyledBackground = styled.div<StyledBackgroundProps>`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.$background};
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
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
`;

const LoginTemplate: React.FC = () => {
    return (
        <StyledLogin>
            <StyledBackground moveTo="right" />
            <LoginForm />
        </StyledLogin>
    );
}

export default LoginTemplate;