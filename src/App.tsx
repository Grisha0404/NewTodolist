import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterValuesType =
    'all' | 'active' | 'completed';


function App() {
    let [task_1, setTask1] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JS/TS', isDone: true}
    ])

    let [filter1, setFilter1] = useState<FilterValuesType>('all')

    let removeTask1 = (id: number) => {
        let filterTask = task_1.filter(task => task.id !== id);
        setTask1(filterTask);
    }

    const taskForTodoList1 = () => {
        switch (filter1){
            case 'completed':
                return  task_1.filter(t => t.isDone);
            case 'active':
                return task_1.filter(t => !t.isDone);
            default:
                return task_1;
        }
    }
    let changeFilter1 = (value: FilterValuesType) => {
        setFilter1(value);
    }

    return (
        <div className="App">
            <TodoList title={'What to learn'} task={taskForTodoList1()} removeTask={removeTask1}
                      changeFilter={changeFilter1} />
            {/*<TodoList title={'What to read'} task={taskForTodoList2} removeTask={removeTask2}
                      changeFilter={changeFilter2}/>
            <TodoList title={'What to write'} task={taskForTodoList3} removeTask={removeTask3}
                      changeFilter={changeFilter3}/>*/}
        </div>
    );
}

export default App;
