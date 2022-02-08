import React from 'react';
import {TaskType} from "./TodoList";

type TaskPropsType = TaskType & {
    removeTask: (id: number) => void
}

const Tasks = (props: TaskPropsType) => {
    return (
        <div>
            {
                <li><input type={"checkbox"} checked={props.isDone}/> <span>{props.title}</span>
                    <button onClick={() => props.removeTask(props.id)}>x
                    </button>
                </li>
            }
        </div>
    );
};

export default Tasks;