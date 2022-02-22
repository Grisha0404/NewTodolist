import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import Button from "./Button";

type AddTaskFromType = {
    addTask: (title: string) => void
}

const AddTaskFrom = (props: AddTaskFromType) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<boolean>(false)
    const onClickInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle('')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onClickButtonHandler()
    }
    const errorMessage = error ? <div style={{color: 'red'}}>Title is require!</div> : null

    return (
        <div>
            <input value={title} onChange={onClickInputHandler} onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}/>
            {/*<button onClick={onClickButtonHandler}>Add</button>*/}
            <Button classNameBut={''} name={'Add'} callback={onClickButtonHandler}/>
            {errorMessage}
        </div>
    );
};

export default AddTaskFrom;