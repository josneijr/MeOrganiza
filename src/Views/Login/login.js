import React from 'react';

// require('dotenv').config()

export default class Login extends React.Component {

    // constructor(props) {
    //     super(props)
        
    // }

    render() {
        return (
            <div className="Login">
                <form>
                    <input placeholder="usuário"/>
                    <br/>
                    <input placeholder="senha" type="password"/>
                </form>
            </div>
        );
    }
}
