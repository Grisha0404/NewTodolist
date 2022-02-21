import React from 'react';
import ControlButtons from "./ControlButtons";
import {TaskType} from "./TodoList";
import Tasks from "./Tasks";
import {FilterType} from "./App";


type TaskListType = {
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FilterType) => void
    filter: FilterType
}


const TaskList = (props: TaskListType) => {
    const tasksHandler = props.tasks.map(t => <Tasks key={t.id} {...t} removeTask={props.removeTask}/>)
    const taskList = tasksHandler.length
        ? <ul>
            {tasksHandler}
        </ul>
        : <span style={{fontSize: '10px', color: 'red'}}> Enter your task please </span>
    return (
        <>
            {taskList}
            <ControlButtons changeFilter={props.changeFilter} filter={props.filter}/>
        </>
    );
};

export default TaskList;