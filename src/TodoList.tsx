import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TaskList from "./TaskList";
import {FilterType} from "./App";


export type TodoListPopsType = {
    title: string,
    task: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FilterType) => void
    addTask: (title: string) => void
    filter: FilterType
    changeTaskStatus: (id: string, isDune: boolean) => void
}

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

const TodoList = (props: TodoListPopsType) => {
    return (
        <div>
            <TodoListHeader title={props.title} addTask={props.addTask}/>
            <TaskList tasks={props.task} removeTask={props.removeTask}
                      changeFilter={props.changeFilter} filter={props.filter}
                      changeTaskStatus={props.changeTaskStatus}/>
        </div>
    );
};

export default TodoList;