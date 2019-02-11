import React, { Component } from 'react';
import {init as firebaseInit} from '../Plugins/firebase'
import '../Style/App.css';

require('dotenv').config()

class App extends Component {

    constructor(props) {
        super(props)
        console.log(process.env);
        firebaseInit()
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
            </a>
            </header>
        </div>
        );
    }
}

export default App;
