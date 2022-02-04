import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const task_1 = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: true}
    ];
    const task_2 = [
        {id: 1, title: 'CSS', isDone: false},
        {id: 2, title: 'HTML', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false}
    ];
    const task_3 = [
        {id: 1, title: 'JS/TS', isDone: true},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'HTML', isDone: true}
    ];
    return (
        <div className="App">
            <TodoList title={'What to learn'} tasks={task_1}/>
            <TodoList title={'What to read'} tasks={task_2}/>
            <TodoList title={'What to write'} tasks={task_3}/>

        </div>
    );
}

export default App;
