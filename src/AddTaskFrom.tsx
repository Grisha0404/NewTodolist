import React, {ChangeEvent, useState} from 'react';


type AddTaskType = {
    addNewTask: (title: string) => void
}

const AddTaskFrom = (props: AddTaskType) => {
    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addNewTask(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button  onClick={onClickButtonHandler}>x</button>
        </div>
    );
};

export default AddTaskFrom;