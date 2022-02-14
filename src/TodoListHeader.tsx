import React from 'react';
import AddTaskFrom from "./AddTaskFrom";

type TodoListHeaderType = {
    title: string
    addTask: (title: string) => void
}

const TodoListHeader = (props: TodoListHeaderType) => {
    return (
        <>
            <h2>{props.title}</h2>
            <AddTaskFrom addTask={props.addTask}/>
        </>
    );
};

export default TodoListHeader;