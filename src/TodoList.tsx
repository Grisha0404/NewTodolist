import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TaskList from "./TaskList";


type TodoListPopsType={
    title: string,
    task: Array<TaskType>
}

export type TaskType ={
    id: number,
    title: string,
    isDone: boolean
}

const TodoList = (props: TodoListPopsType) => {
    return (
        <div>
        <TodoListHeader title={props.title}/>
        <TaskList tasks={props.task}/>
        </div>
    );
};

export default TodoList;