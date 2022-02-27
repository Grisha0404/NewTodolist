import React, {ChangeEvent} from 'react';
import {TaskType} from "./TodoList";
import Button from "./Button";

type TaskPropsType = TaskType & {
    removeTask: (id: string) => void
    changeTaskStatus: (id: string, isDune: boolean) => void
}

const Tasks = (props: TaskPropsType) => {

    const taskClass = props.isDone ? 'completed-task' : '';
    const buttonHandler = () => props.removeTask(props.id);
    const changeTskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.id, e.currentTarget.checked)
    }

    return (
        <div>
            {
                <li>
                    <input type={"checkbox"}
                           onChange={changeTskStatus}
                           checked={props.isDone}/>
                    <span className={taskClass}>{props.title}</span>
                    <Button classNameBut={''} name={'x'} callback={buttonHandler}/>
                </li>
            }
        </div>
    );
};

export default Tasks;