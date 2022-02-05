import React from 'react';
import {FilterValuesType} from "./App";

type ButtonsType = {
    changeFilter: (value: FilterValuesType) => void
}

const ControlButtons = (props: ButtonsType) => {
    return (
        <div>
            <button onClick={() => {
                props.changeFilter('all')
            }}>All
            </button>
            <button onClick={() => {
                props.changeFilter('active')
            }}>Active
            </button>
            <button onClick={() => {
                props.changeFilter('completed')
            }}>Completed
            </button>
        </div>
    );
};

export default ControlButtons;