import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./AddItemForm";

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type FilterValuesType = "all" | "active" | "completed";

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function removeTask(todolistID: string, id: string) {
        setTasks({...tasks, [todolistID]: [...tasks[todolistID].filter((el) => el.id !== id)]})
        /*let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);*/
    }

    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]})
        /*let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks];
        setTasks(newTasks);*/
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map((e) => e.id === taskId ? {...e, isDone} : e)})
        /*let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks([...tasks]);*/
    }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map((el) => el.id === todolistID ? {...el, filter: value} : el))
    }

    const upDateTask = (todolistID: string, tID: string, title: string) => {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map((el) => el.id === tID ? {...el, title} : el)})
    }
    const upDateTitle = (todolistID: string, title: string) => {
        setTodolists([...todolists.map((el) => el.id === todolistID ? {...el, title} : el)])
    }
    const addTitle = (title: string) => {
        let newID = v1()
        let newTodolist: todolistsType = {id: newID, title, filter: 'all'}
        setTodolists([newTodolist, ...todolists])
        setTasks({[newID]: [], ...tasks})
    }
    return (
        <div className="App">
            <AddItemForm callBack={addTitle}/>
            {todolists.map((e) => {
                let tasksForTodolist = tasks[e.id];
                if (e.filter === "active") {
                    tasksForTodolist = tasks[e.id].filter(t => !t.isDone);
                }
                if (e.filter === "completed") {
                    tasksForTodolist = tasks[e.id].filter(t => t.isDone);
                }
                return (
                    <Todolist
                        key={e.id}
                        todolistID={e.id}
                        title={e.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={e.filter}
                        upDateTask={upDateTask}
                        upDateTitle={upDateTitle}
                    />
                )
            })}

        </div>
    );
}

export default App;
