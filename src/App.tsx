import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterValuesType =
    'all' | 'active' | 'completed';


function App() {
    let [task_1, setTask1] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: true}
    ])
    let [task_2, setTask2] = useState<Array<TaskType>>([
        {id: 1, title: 'CSS', isDone: false},
        {id: 2, title: 'HTML', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false}
    ]);
    let [task_3, setTask3] = useState<Array<TaskType>>([
        {id: 1, title: 'JS/TS', isDone: true},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'HTML', isDone: true}
    ]);

    let [filter1, setFilter1] = useState('all')
    let [filter2, setFilter2] = useState('all')
    let [filter3, setFilter3] = useState('all')

    let removeTask1 = (id: number) => {
        let filterTask = task_1.filter(t => t.id !== id);
        setTask1(filterTask);
    }
    let removeTask2 = (id: number) => {
        let filterTask2 = task_2.filter(t => t.id !== id);
        setTask2(filterTask2)
    }
    let removeTask3 = (id: number) => {
        let filterTask3 = task_3.filter(t => t.id !== id);
        setTask3(filterTask3)
    }
    let taskForTodoList1 = task_1;
    if (filter1 === 'completed') {
        taskForTodoList1 = task_1.filter(t => t.isDone)
    }
    if (filter1 === 'active') {
        taskForTodoList1 = task_1.filter(t => !t.isDone)
    }
    let taskForTodoList2 = task_2;
    if (filter2 === 'completed') {
        taskForTodoList2 = task_2.filter(t => t.isDone)
    }
    if (filter2 === 'active') {
        taskForTodoList2 = task_2.filter(t => !t.isDone)
    }
    let taskForTodoList3 = task_3;
    if (filter3 === 'completed') {
        taskForTodoList3 = task_3.filter(t => t.isDone === true)
    }
    if (filter3 === 'active') {
        taskForTodoList3 = task_3.filter(t => t.isDone === false)
    }
    let changeFilter1 = (value: FilterValuesType) => {
        setFilter1(value);
    }
    let changeFilter2 = (value: FilterValuesType) => {
        setFilter2(value);
    }
    let changeFilter3 = (value: FilterValuesType) => {
        setFilter3(value);
    }

    return (
        <div className="App">
            <TodoList title={'What to learn'} task={taskForTodoList1} removeTask={removeTask1}
                      changeFilter={changeFilter1}/>
            <TodoList title={'What to read'} task={taskForTodoList2} removeTask={removeTask2}
                      changeFilter={changeFilter2}/>
            <TodoList title={'What to write'} task={taskForTodoList3} removeTask={removeTask3}
                      changeFilter={changeFilter3}/>
        </div>
    );
}

export default App;
