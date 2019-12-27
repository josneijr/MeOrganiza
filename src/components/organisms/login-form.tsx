import React from 'react';
import Input from 'components/atoms/input';
import styled from 'styled-components';

const Form = styled.div`
    padding: 30px;
    display: grid;
    grid-row-gap: 10px;
    width: 80vw;
    max-width: 400px;
    position: relative;
`;

interface LoginProps {
    handleChange: (name: string, value: string) => void
};

const LoginForm: React.FC<LoginProps> = ({ handleChange }) => {
    return (
        <Form>
            <Input fullWidth name="email" placeholder="email" type="email" updateValue={v => handleChange("email", v)} />
            <Input fullWidth name="password" placeholder="senha" type="password" updateValue={v => handleChange("password", v)} />
        </Form>
    );
}

export default LoginForm;