import React from 'react';
import AddTaskFrom from "./AddTaskFrom";

type TodoListHeaderType = {
    title: string
    addNewTask: (title: string) => void


}

const TodoListHeader = (props: TodoListHeaderType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <AddTaskFrom addNewTask={props.addNewTask} />
        </div>
    );
};

export default TodoListHeader;