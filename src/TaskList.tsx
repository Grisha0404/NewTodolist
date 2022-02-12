import React from 'react';
import ControlButtons from "./ControlButtons";
import {TaskType} from "./TodoList";
import Tasks from "./Tasks";
import {FilterType} from "./App";


type TaskListType = {
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (filter: FilterType) => void
}


const TaskList = (props: TaskListType) => {
    const tasksHandler = props.tasks.map(t => <Tasks key={t.id} {...t} removeTask={props.removeTask}/>)
return (
    <div>
        <ul>
            {tasksHandler}
        </ul>
        <ControlButtons changeFilter={props.changeFilter}/>
    </div>
);
};

export default TaskList;