import React from 'react';
import ControlButtons from "./ControlButtons";
import {TaskType} from "./TodoList";
import Task from "./Task";
import {FilterValuesType} from "./App";

type TaskListType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void
}


const TaskList = (props: TaskListType) => {
    return (
        <div>
            <ul>
                {props.tasks.map(task => <Task key={task.id} {...task} removeTask={props.removeTask} />)}
            </ul>
            <ControlButtons changeFilter={props.changeFilter}/>
        </div>
    );
};

export default TaskList;