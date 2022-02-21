import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
    classNameBut: string
}

const Button: React.FC<ButtonType> = ({name, callback,classNameBut}) => {
    const OnClickHandler = () => {
        callback()
    }

    return (
        <>
            <button className={classNameBut} onClick={OnClickHandler}>{name}</button>
        </>
    );
};

export default Button;