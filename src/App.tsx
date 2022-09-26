import React from 'react';
import './App.scss';
import SignUpInfo from "./components/SignUpInfo/SignUpInfo";

function App() {
    return (
        <div className="App">
            <div className="header main"></div>
            <SignUpInfo/>
            <div className="footer main"></div>
        </div>
    );
}

export default App;
