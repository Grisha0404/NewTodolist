import React, {useState} from 'react';
import AddTaskFrom from "./AddTaskFrom";

type TodoListHeaderType = {
    addTask: (title: string) => void
}

const TodoListHeader = (props: TodoListHeaderType) => {

    return (
        <>
            <AddTaskFrom addTask={props.addTask}/>
        </>
    );
};

export default TodoListHeader;