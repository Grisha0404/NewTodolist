import React from 'react';
import Task from "../Task/Task";
import ControlButtons from "./ControlButtons";
import {TaskType} from "./TodoList";
import style from './taskList.module.css'

type TaskListType = {
    task: Array<TaskType>
}

const TaskList = (props: TaskListType) => {
    return (
        <div className={style.taskList}>
            <ul>
                <Task {...props.task[0]}/>
                <Task {...props.task[1]}/>
                <Task {...props.task[2]}/>
            </ul>
            <ControlButtons/>
        </div>
    );
};

export default TaskList;