import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TaskList from "./TaskList";
import {FilterType} from "./App";


export type TodoListPopsType = {
    title: string,
    task: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (filter: FilterType) => void
    addNewTask: ( title: string) => void
}

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

const TodoList = (props: TodoListPopsType) => {
    return (
        <div>
            <TodoListHeader title={props.title} addNewTask={props.addNewTask} />
            <TaskList tasks={props.task} removeTask={props.removeTask} changeFilter={props.changeFilter}/>
        </div>
    );
};

export default TodoList;