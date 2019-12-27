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

interface SignupProps {
    handleChange: (name: string, value: string) => void
};

const SignupForm: React.FC<SignupProps> = ({ handleChange }) => {
    return (
        <Form>
            <Input fullWidth name="name" placeholder="nome completo" updateValue={v => handleChange("name", v)} />
            <Input fullWidth name="email" placeholder="email" type="email" updateValue={v => handleChange("email", v)} />
            <Input fullWidth name="password" placeholder="senha" type="password" updateValue={v => handleChange("password", v)} />
        </Form>
    );
}

export default SignupForm;