import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TaskList from "./TaskList";
import {FilterValuesType} from "./App";


export type TodoListPopsType = {
    title: string,
    task: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

const TodoList = (props: TodoListPopsType) => {
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <TaskList tasks={props.task} removeTask={props.removeTask} changeFilter={props.changeFilter}/>
        </div>
    );
};

export default TodoList;