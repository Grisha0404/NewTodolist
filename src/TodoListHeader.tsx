import React from 'react';
import AddTaskFrom from "./AddTaskFrom";
import {TaskType} from "./TodoList";

type TodoListHeaderType = {
    title: string

}

const TodoListHeader = (props: TodoListHeaderType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <AddTaskFrom/>
        </div>
    );
};

export default TodoListHeader;