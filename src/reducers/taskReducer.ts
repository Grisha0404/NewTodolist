import {TasksStateType} from "../App";
import {v1} from "uuid";
import {addTodolistACType, removeTodolistACType} from "./todolistReducer";


export const taskReducer = (state: TasksStateType, action: taskReducerType) => {
    switch (action.title) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(t => t.id !== action.payload.id)
            }
        }
        case 'ADD_TASK': {
            return {
                ...state,
                [action.payload.todolistId]: [{
                    id: v1(),
                    title: action.payload.title,
                    isDone: false
                }, ...state[action.payload.todolistId]]
            }
        }
        case 'CHANGE-STATUS-TASK': {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.id ? {
                    ...el,
                    isDone: action.payload.isDone
                } : el)
            }
        }
        case "CHANGE-TITLE-TASK": {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.id ? {
                    ...el,
                    title: action.payload.newValue
                } : el)
            }
        }
        case "ADD-TODOLIST": {
            return {
                ...state,
                [action.payload.todolistID]: []
            }
        }
        case 'REMOVE-TODOLIST': {
            let newState = {...state}
            delete newState[action.payload.id]
            return newState
        }
        default:
            return state
    }
}


export type taskReducerType =
    removeTaskACType
    | addTaskACType
    | addTodolistACType
    | changeStatusACType
    | changeTaskTitleACType
    | removeTodolistACType


export type removeTaskACType = ReturnType<typeof removeTaskAC>
export type addTaskACType = ReturnType<typeof addTaskAC>
export type changeStatusACType = ReturnType<typeof changeStatusAC>
export type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>

export const removeTaskAC = (id: string, todolistId: string) => {
    return {
        title: 'REMOVE-TASK',
        payload: {
            id,
            todolistId
        }
    } as const
}
export const addTaskAC = (title: string, todolistId: string) => {
    return {
        title: 'ADD_TASK',
        payload: {
            title,
            todolistId
        }
    } as const
}
export const changeStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        title: 'CHANGE-STATUS-TASK',
        payload: {
            id,
            isDone,
            todolistId
        }
    } as const
}
export const changeTaskTitleAC = (id: string, newValue: any, todolistId: string) => {
    return {
        title: 'CHANGE-TITLE-TASK',
        payload: {
            id,
            newValue,
            todolistId
        }
    } as const
}

