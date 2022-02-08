import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterType = 'all' | 'active' | 'completed'

function App() {
    let [task, setTask] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JS/TS', isDone: true},
        {id: 4, title: 'REACT', isDone: false}
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

    let changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }

    let addNewTask = (title: string) => {
        console.log(title);
    }

    let removeTask = (id: number) => {
        let filterTask = task.filter(t => t.id !== id);
        setTask(filterTask)
    }

    return (
        <div className="App">
            <TodoList title={'What to learn'} task={taskForTodoList()} removeTask={removeTask}
                      changeFilter={changeFilter} addNewTask={addNewTask}/>
        </div>
    );
}

export default App;
