import React, { Component } from 'react';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';
import styled from 'styled-components';

const Frame = styled.div`
    padding: 30px;
    display: grid;
    grid-row-gap: 10px;
    grid-template-rows: 1fr 1.5fr 1.5fr 1fr;
    width: 80vw;
    max-width: 400px;
    background-color: green;
`;

class LoginField extends Component {
    constructor(props: object) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Frame>
                <Input fullWidth placeholder="usuário" updateValue={(v: any) => console.log(v)} />
                <Input fullWidth placeholder="senha" updateValue={(v: any) => console.log(v)} />
                <Button primary>
                    login
                </Button>
                <Button secondary>
                    sign up
                </Button>
            </Frame>
        );
    }
}

export default LoginField;