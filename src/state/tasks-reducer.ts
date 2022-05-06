import {TasksStateType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType, SetTodosACType} from './todolists-reducer';
import {TaskPriorities, TaskStatuses, TaskType, todolistsAPI, UpdateTaskModelType} from '../api/todolists-api'
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK',
    task: TaskType
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    todolistId: string
    taskId: string
    status: TaskStatuses
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    todolistId:string,
    taskId: string,
    title:string,
}
export type setTasksACType = ReturnType<typeof setTasksAC>
export type FetchTasksACType = ReturnType<typeof fetchTasksAC>

type ActionsType = RemoveTaskActionType | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType
    | SetTodosACType
    | setTasksACType
    | FetchTasksACType

const initialState: TasksStateType = {
    /*"todolistId1": [
        { id: "1", title: "CSS", status: TaskStatuses.New, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "2", title: "JS", status: TaskStatuses.Completed, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "3", title: "React", status: TaskStatuses.New, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
    ],
    "todolistId2": [
        { id: "1", title: "bread", status: TaskStatuses.New, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "2", title: "milk", status: TaskStatuses.Completed, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "3", title: "tea", status: TaskStatuses.New, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
    ]*/

}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "SET-TASKS": {
            const stateCopy = {...state}
            stateCopy[action.todolisId] = action.task
            //return {...state, [action.todolistId]: action.task}
            return stateCopy
        }
        case "SET-TODOS": {
            const stateCopy = {...state}
            action.todos.forEach(td => {
                stateCopy[td.id] = []
            })
            return stateCopy
        }
        case 'REMOVE-TASK': {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId];
            const newTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {
            const stateCopy = {...state}
            // const newTask: TaskType = {
            //     id: v1(),
            //     title: action.title,
            //     status: TaskStatuses.New,
            //     todoListId: action.todolistId, description: '',
            //     startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low
            // }
            const tasks = stateCopy[action.task.todoListId];
            const newTasks = [action.task, ...tasks];
            stateCopy[action.task.todoListId] = newTasks;
            return stateCopy;
        }
        case 'CHANGE-TASK-STATUS': {
            let todolistTasks = state[action.todolistId];
            let newTasksArray = todolistTasks
                .map(t => t.id === action.taskId ? {...t, status: action.status} : t);

            state[action.todolistId] = newTasksArray;
            return ({...state});
        }
        case 'CHANGE-TASK-TITLE': {
            let todolistTasks = state[action.todolistId];
            // найдём нужную таску:
            let newTasksArray = todolistTasks
                .map(t => t.id === action.taskId ? {...t, title: action.title} : t);

            state[action.todolistId] = newTasksArray;
            return ({...state});
        }
        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todolistId]: []
            }
        }
        case 'REMOVE-TODOLIST': {
            const copyState = {...state};
            delete copyState[action.id];
            return copyState;
        }
        case "FETCH-TASKS": {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = action.tasks
            return stateCopy
        }
        default:
            return state;
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}
export const addTaskAC = (task: TaskType): AddTaskActionType => {
    return {type: 'ADD-TASK', task}
}
export const changeTaskStatusAC = (taskId: string, status: TaskStatuses, todolistId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', status, todolistId, taskId}
}
export const changeTaskTitleAC = (todolistId:string, taskId:string, title:string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', todolistId, taskId, title}
}
export const setTasksAC = (task: TaskType[], todolisId: string) => {
    return {
        type: 'SET-TASKS',
        task,
        todolisId,
    } as const
}
export const fetchTasksAC = (todolistId: string, tasks: TaskType[]) => {
    return {
        type: 'FETCH-TASKS',
        todolistId,
        tasks,
    } as const
}


export const fetchTaskTC = (todolistId: string) => (dispatch: Dispatch): void => {
    let pr = todolistsAPI.getTasks(todolistId)
    pr.then((res) => {
        dispatch(fetchTasksAC(todolistId, res.data.items,))
    })
}
export const deleteTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch) => {
    let pr = todolistsAPI.deleteTask(todolistId, taskId)
    pr.then((res) => {
        dispatch(removeTaskAC(taskId, todolistId))
    })
}
export const createTaskTC = (todolistId: string, title: string) => (dispatch: Dispatch) => {
    let pr = todolistsAPI.createTask(todolistId, title)
    pr.then((res) => {
        dispatch(addTaskAC(res.data.data.item))
    })
}
export const updateTaskTC = (todolistId: string, taskId: string, title:string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState()
    const allTasks = state.tasks
    const taskForClicked = allTasks[todolistId]
    const currenTask = taskForClicked.find(t => t.id === taskId)
    if(currenTask){
        const model: UpdateTaskModelType = {
            title: title,
            status: currenTask.status,
            deadline: currenTask.deadline,
            description: currenTask.description,
            priority: currenTask.priority,
            startDate: currenTask.startDate,
        }
        let pr = todolistsAPI.updateTask(todolistId, taskId, model)
        pr.then((res) => {
            dispatch(changeTaskTitleAC(todolistId, taskId, title))
        })
    }

}
export const changeTaskStatusTC = (todolistId: string, taskId: string, status: TaskStatuses) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const state = getState()
    const allTasks = state.tasks
    const taskForClicked = allTasks[todolistId]
    const currenTask = taskForClicked.find(t => t.id === taskId)

    if (currenTask) {
        const model: UpdateTaskModelType = {
            title: currenTask.title,
            status: status,
            deadline: currenTask.deadline,
            description: currenTask.description,
            priority: currenTask.priority,
            startDate: currenTask.startDate,
        }
        todolistsAPI.updateTask(todolistId, taskId, model).then((res) => {
            dispatch(changeTaskStatusAC(taskId, status, todolistId))
        })
    }
}