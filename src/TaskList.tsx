import React from 'react';
import ControlButtons from "./ControlButtons";
import {TaskType} from "./TodoList";
import Task from "./Task";

type TaskListType = {
    tasks: Array<TaskType>
}


const TaskList = (props: TaskListType) => {
    return (
        <div>
            <ul>
                <Task {...props.tasks[0]}/>
                <Task {...props.tasks[1]}/>
                <Task {...props.tasks[2]}/>
            </ul>
            <ControlButtons/>
        </div>
    );
};

export default TaskList;