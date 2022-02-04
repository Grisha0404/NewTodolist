import React from 'react';
import TodoListHeader from "./TodoListHeader";
import TaskList from "./TaskList/TaskList";


type TodoListPopsType={
    title: string,
    tasks: Array<TaskType>
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
        <TaskList task={props.tasks}/>
        </div>
    );
};

export default TodoList;