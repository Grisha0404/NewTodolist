import React from 'react';
import {TaskType} from "./TodoList";
import Button from "./Button";

type TaskPropsType = TaskType & {
    removeTask: (id: string) => void
}

const Tasks = (props: TaskPropsType) => {

    return (
        <div>
            {
                <li><input type={"checkbox"} checked={props.isDone}/> <span>{props.title}</span>
                    {/*<button className={style.buttonDelete} onClick={() => props.removeTask(props.id)}>x
                    </button>*/}
                    <Button name={'x'} callback={() => props.removeTask(props.id)}/>
                </li>
            }
        </div>
    );
};

export default Tasks;