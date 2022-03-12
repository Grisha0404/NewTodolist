import React, {ChangeEvent, useState} from 'react';

type EditableSpan = {
    title: string
    callBack:(title:string)=>void
}

export const EditableSpan: React.FC<EditableSpan> = ({title,callBack}) => {
    let [newTitle, setNewTitle] = useState(title)
    let [edit, setEdit] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       setNewTitle( e.currentTarget.value);
    }

    const onDoubleClicklHandler = () => {
        setEdit(true)
    }
    const onBlurHandler = () => {
        setEdit(false)
        callBack(newTitle)
    }

    return (
        edit
            ?
            <input value={newTitle} autoFocus onChange={onChangeHandler} onBlur={onBlurHandler}/>
            :
            <span onDoubleClick={onDoubleClicklHandler}>{title}</span>
    );
};
