import React from 'react';
import AddTaskFrom from "./AddTaskFrom";

type TodoListHeaderType = {
    title: string
}

const TodoListHeader = (props: TodoListHeaderType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <AddTaskFrom/>
        </div>
    );
};

export default TodoListHeader;