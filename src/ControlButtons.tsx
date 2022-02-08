import React from 'react';
import {FilterType} from "./App";

type ButtonsType = {
    changeFilter: (filter: FilterType) => void
}

const ControlButtons = (props: ButtonsType) => {
    return (
        <div>
            <button onClick={() => props.changeFilter('all')}>All
            </button>
            <button onClick={() => props.changeFilter('active')}>Active
            </button>
            <button onClick={() => props.changeFilter('completed')}>Completed
            </button>
        </div>
    );
};

export default ControlButtons;