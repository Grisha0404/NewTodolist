import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'

function App() {
    let [task, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: false},
        {id: v1(), title: 'JS/TS', isDone: true},
        {id: v1(), title: 'REACT', isDone: false}
    ])
    let [filter, setFilter] = useState<FilterType>('all');

    const taskForTodoList = () => {
        switch (filter) {
            case "active":
                return task.filter(f => !f.isDone)
            case "completed":
                return task.filter(f => f.isDone)
            default:
                return task
        }
    }
    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }
    const removeTask = (id: string) => {
        let filterTask = task.filter(t => t.id !== id);
        setTask(filterTask)
    }
    const addTask = (title: string) => {
       /* const newTask: TaskType = {
            id: v1(), title: 'new TASK', isDone: false
        }
        const updatedTask = [newTask, ...task]*/
        setTask([{id: v1(), title: title, isDone: false}, ...task])
    }

    return (
        <div className="App">
            <TodoList title={'What to learn'} task={taskForTodoList()} removeTask={removeTask}
                      changeFilter={changeFilter} addTask={addTask}/>
        </div>
    );
}

export default App;
