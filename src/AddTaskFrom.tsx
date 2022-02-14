import React from 'react';

type AddTaskFromType = {
    addTask: (title: string) => void
}

const AddTaskFrom = (props: AddTaskFromType) => {

    const onClickButtonHandler = () => {
        props.addTask("title")
    }
    return (
        <div>
            <input/>
            <button onClick={onClickButtonHandler}>Add</button>
        </div>
    );
};

export default AddTaskFrom;