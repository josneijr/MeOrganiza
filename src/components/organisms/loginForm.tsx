import React, { Component } from 'react';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import styled from 'styled-components';
import colors from 'components/atoms/colors';

const Form = styled.form`
    padding: 30px;
    display: grid;
    grid-row-gap: 10px;
    grid-template-rows: 1fr 1.5fr 1fr 1fr;
    width: 80vw;
    max-width: 400px;
    background-color: ${colors.$background};
    position: relative;
`;

class LoginForm extends Component {
    constructor(props: object) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form>
                <Input fullWidth placeholder="usuário" updateValue={(v: any) => console.log(v)} />
                <Input fullWidth placeholder="senha" type="password" updateValue={(v: any) => console.log(v)} />
                <Button primary type="submit">
                    login
                </Button>
                <Button secondary>
                    sign up
                </Button>
            </Form>
        );
    }
}

export default LoginForm;