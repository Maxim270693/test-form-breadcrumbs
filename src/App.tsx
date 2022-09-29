import React, {useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpInfo from "./components/SignUpInfo/SignUpInfo";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import SingleStep from "./components/SingleStep/SingleStep";
import {Navigation} from "./components/Navigation/Navigation";

function App() {
    const [phone, setPhone] = useState('');

    const onChange = (event: any) => {
        setPhone(event.target.value)
    }

    return (
        <div className="App">
            <div className="header main">
                <img className="h-100 ml-5" src="https://www.pngitem.com/pimgs/m/433-4332114_flying-balloon-svg-clip-arts-zeppelin-clipart-hd.png" alt=""/>
            </div>
            <Navigation/>
            <SingleStep step="SignUpInfo">
                <SignUpInfo phone={phone}
                            onChange={onChange}/>
            </SingleStep>
            <SingleStep step="PersonalInfo">
                <PersonalInfo/>
            </SingleStep>
            <div className="footer main"></div>
        </div>
    );
}

export default App;
