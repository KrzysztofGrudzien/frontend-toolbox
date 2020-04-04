import React from 'react';
import logo from '../../assets/images/icons/logo.svg';
import './App.css';

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome in the FrontEnd ToolBOX App</p>
            <p>
                You have to be patient
                <span role="img" aria-label="icon">
                    😎
                </span>
                - we will be work very hard to build useful frontend tools.
            </p>
            <p>Trust me this gonna be awesome thing!</p>
        </header>
    </div>
);

export default App;
