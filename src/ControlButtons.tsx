import React from 'react';
import {FilterType} from "./App";
import style from "./todoList.module.css"

type ButtonsType = {
    changeFilter: (filter: FilterType) => void
}

const ControlButtons = (props: ButtonsType) => {
    const allHandler = () => props.changeFilter('all');
    const activeHandler = () => props.changeFilter('active');
    const completedHandler = () => props.changeFilter('completed');
    return (
        <div>
            <button className={style.button} onClick={allHandler}>All
            </button>
            <button className={style.button} onClick={activeHandler}>Active
            </button>
            <button className={style.button} onClick={completedHandler}>Completed
            </button>
        </div>
    );
};

export default ControlButtons;