import React, { Component } from 'react';
import Input from 'components/atoms/input';
import styled from 'styled-components';

const Form = styled.form`
    padding: 30px;
    display: grid;
    grid-row-gap: 10px;
    width: 80vw;
    max-width: 400px;
    position: relative;
`;

class SignupForm extends Component {
    constructor(props: object) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form>
                <Input fullWidth placeholder="nome completo" updateValue={(v: any) => console.log(v)} />
                <Input fullWidth placeholder="email" type="email" updateValue={(v: any) => console.log(v)} />
                <Input fullWidth placeholder="senha" type="password" updateValue={(v: any) => console.log(v)} />
            </Form>
        );
    }
}

export default SignupForm;