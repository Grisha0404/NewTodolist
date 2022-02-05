import React from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType
const Task = (props: TaskPropsType) => {
    return (
        <div>

            <li><input type="checkbox" checked={props.isDone}/> <span>{props.title}</span></li>

        </div>
    );
};

export default Task;