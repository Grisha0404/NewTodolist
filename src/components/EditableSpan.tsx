import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type EditableSpanType={
    oldTitle:string
    callBack:(title:string)=>void
}

export const EditableSpan = (props:EditableSpanType) => {
    let [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.oldTitle)

    const doubleClickHandler = () => {
      setEdit(true)
    }
    const blurHandler = () => {
        props.callBack(newTitle)
      setEdit(false)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            blurHandler();
        }
    }
    
    return (
        edit ? <input value={newTitle} onChange={onChangeHandler} autoFocus onBlur={blurHandler} onKeyPress={onKeyPressHandler}/> :
        <span onDoubleClick={doubleClickHandler}>{props.oldTitle}</span>
    );
};
