import React from 'react';
import './SignUpInfo.scss';

const SignUpInfo = () => {
    return (
        <div className="formWrapper">
            <h1>SignUp</h1>
            <form className="form">
                <input type="tel"
                       placeholder="phone"
                />
                <input type="email"
                       placeholder="Email"
                />
                <input type="password"
                       placeholder="Password"
                />
                <input type="password"
                       placeholder="Repeat Password"
                />
                <button className="formBtn">next</button>
            </form>
        </div>
    );
};

export default SignUpInfo;