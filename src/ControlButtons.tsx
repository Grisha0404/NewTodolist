import React from 'react';
import {FilterType} from "./App";
import style from "./todoList.module.css"

type ButtonsType = {
    changeFilter: (filter: FilterType) => void
}

const ControlButtons = (props: ButtonsType) => {
    /*const allHandler = () => props.changeFilter('all');
    const activeHandler = () => props.changeFilter('active');
    const completedHandler = () => props.changeFilter('completed');*/
    const onClickHandler = (filter: FilterType) => () =>
        props.changeFilter(filter)


    return (
        <div>
            <button className={style.button} onClick={onClickHandler('all')}>All
            </button>
            <button className={style.button} onClick={onClickHandler('active')}>Active
            </button>
            <button className={style.button} onClick={onClickHandler('completed')}>Completed
            </button>
        </div>
    );
};

export default ControlButtons;