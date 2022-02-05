import React from 'react';
import {TaskType, TodoListPopsType} from "./TodoList";

type TaskPropsType = {
    task: Array<TaskType>
    removeTask: (id: number) => void
}

const Task = (props: TaskPropsType) => {
    return (
        <div>
            {
                props.task.map(t =>
                    <li>
                        <input onClick={() => {
                            alert("click")
                        }} type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => {
                            props.removeTask(t.id)
                        }}>x
                        </button>
                    </li>)

            }
        </div>
    );
};

export default Task;