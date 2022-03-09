import React from 'react';

type ModelWindowType={
    title:string
}

export const ModelWindow:React.FC<ModelWindowType> = ({title,children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <input type='text'/>
            <input type='text'/>
            {children}
            <div>
            <button>yes</button>
            <button>no</button>
            </div>
        </div>
    );
};
