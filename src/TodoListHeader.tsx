import React from 'react';
import AddTaskFrom from "./AddTaskFrom";

type TodoListHeaderType = {
    title: string
    addNewTask: (title: string) => void


}

const TodoListHeader = (props: TodoListHeaderType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <AddTaskFrom addNewTask={props.addNewTask} />
        </div>
    );
};

export default TodoListHeader;