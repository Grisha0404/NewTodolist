import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}

const Button:React.FC<ButtonType> =({name, callback }) => {
    const OnClickHandler = () => {
       callback()
    }
    return (
        <>
            <button onClick={OnClickHandler}>{name}</button>
        </>
    );
};

export default Button;