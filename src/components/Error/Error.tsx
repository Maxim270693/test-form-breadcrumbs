import React from 'react';
import './Error.scss';

type PropsType = {
    children?: string,
}

const Error = ({children}: PropsType) => {
    return (
        <div>
            <div className="error">{children}</div>
        </div>
    );
};

export default Error;