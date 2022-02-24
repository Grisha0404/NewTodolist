import React from 'react';
import {FilterType} from "./App";
import Button from "./Button";

type ButtonsType = {
    changeFilter: (filter: FilterType) => void
    filter: FilterType
}

const ControlButtons = (props: ButtonsType) => {
    const allHandler = () => props.changeFilter('all');
    const activeHandler = () => props.changeFilter('active');
    const completedHandler = () => props.changeFilter('completed');
    /*const onClickHandler = (filter: FilterType) => () =>
        props.changeFilter(filter)*/
    const activeAll = props.filter === 'all' ? 'activeButton' : '';
    const activeActive = props.filter === 'active' ? 'activeButton' : '';
    const activeCompleted = props.filter === 'completed' ? 'activeButton' : '';

    return (
        <div>
            {/*<button  className={props.filter === 'all' ? 'activeButton': ''} onClick={onClickHandler('all')}>All
            </button>
            <button className={props.filter === 'active' ? 'activeButton': ''} onClick={onClickHandler('active')}>Active
            </button>
            <button className={props.filter === 'completed' ? 'activeButton': ''} onClick={onClickHandler('completed')}>Completed
            </button>*/}
            <Button classNameBut={activeAll} name={'All'} callback={allHandler}/>
            <Button classNameBut={activeActive} name={'Active'}
                    callback={activeHandler}/>
            <Button classNameBut={activeCompleted} name={'Completed'}
                    callback={completedHandler}/>

        </div>
    );
};

export default ControlButtons;