import React, {ChangeEvent, useState} from 'react';

type EditSpanType = {
    title: string
    callBack:(title:string)=>void
}

export const EditSpan: React.FC<EditSpanType> = ({title,callBack}) => {
    let [newTitle, setNewTitle] = useState(title)
    let [edit, setEdit] = useState(false)
    const doubleClickHandler = () => {
        setEdit(true)
    }
    const blurHandler = ()=>{
        setEdit(false)
        callBack(newTitle)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle( e.currentTarget.value);
    }
    return (
                edit
                    ?
                    <input value={newTitle} autoFocus onBlur={blurHandler} onChange={onChangeHandler}/>
                    :
                    <span onDoubleClick={doubleClickHandler}>{title}</span>
    );
};
