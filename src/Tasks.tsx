import React from 'react';
import {TaskType} from "./TodoList";
import Button from "./Button";

type TaskPropsType = TaskType & {
    removeTask: (id: string) => void
}

const Tasks = (props: TaskPropsType) => {

    const taskClass = props.isDone ? 'completed-task' : '';
    const buttonHandler = () => props.removeTask(props.id);

    return (
        <div>
            {
                <li>
                    <input type={"checkbox"} checked={props.isDone}/>
                    <span className={taskClass}>{props.title}</span>
                    <Button classNameBut={''} name={'x'} callback={buttonHandler}/>
                </li>
            }
        </div>
    );
};

export default Tasks;