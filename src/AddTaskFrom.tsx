import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import Button from "./Button";

type AddTaskFromType = {
    addTask: (title: string) => void
}

const AddTaskFrom = (props: AddTaskFromType) => {
    const [title, setTitle] = useState('')
    const onClickInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && onClickButtonHandler()
    }
    return (
        <div>
            <input value={title} onChange={onClickInputHandler} onKeyPress={onKeyPressHandler}/>
            {/*<button onClick={onClickButtonHandler}>Add</button>*/}
            <Button name={'Add'} callback={onClickButtonHandler}/>
        </div>
    );
};

export default AddTaskFrom;