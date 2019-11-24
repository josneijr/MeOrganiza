import React from 'react';
import LoginField from 'components/structures/loginField';
import styled from 'styled-components';
import colors from 'components/atoms/colors';

const Background = styled.div`
    width: 130vw;
    height: 130vh;
    background-color: ${colors.$grey1}
`;

const Login: React.FC = () => {
    return (
        <>
            {/* <Background /> */}
            <LoginField />
        </>
    );
}

export default Login;
