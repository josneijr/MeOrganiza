import React, { Component } from 'react';
import Input from 'components/atoms/input';
import Button from 'components/atoms/button';

class LoginField extends Component {
    constructor(props: object) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Input placeholder="Teste" updateValue={(v: any) => console.log(v)} />
                <Input placeholder="Teste" updateValue={(v: any) => console.log(v)} />
                <Button primary>
                    Teste
                </Button>
                <Button secondary>
                    Teste
                </Button>
            </div>
        );
    }
}

export default loginField;