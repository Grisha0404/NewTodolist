import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TaskObjectType = {
    [key: string]: Array<TaskType>
}

function App() {
    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TaskObjectType>({
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


    function removeTask(todoListID: string, id: string) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].filter((el) => el.id !== id)})
    }

    function addTask(todoListID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})
    }

    function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].map((el) => el.id === taskId ? {...el, isDone} : el)})
    }


    function changeFilter(todoListID: string, value: FilterValuesType) {
        setTodoLists(todoLists.map((el) => el.id === todoListID ? {...el, filter: value} : el))
        /*setFilter(value);*/
    }
    const removeTodoList = (todoListID: string)=>{
        setTodoLists(todoLists.filter(el=>el.id!==todoListID))
        delete tasks[todoListID]
    }

    return (
        <div className="App">
            {
                todoLists.map((el) => {
                    let tasksForTodolist = tasks[el.id];
                    if (el.filter === "active") {
                        tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                    }
                    if (el.filter === "completed") {
                        tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                    }
                    return (
                        <Todolist
                            key={el.id}
                            todoListID={el.id}
                            title={el.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={el.filter}
                            removeTodoListHandler={removeTodoList}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;
