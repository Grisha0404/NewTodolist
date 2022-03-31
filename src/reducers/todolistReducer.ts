import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistReducer = (state: TodolistType[], action: todolistReducerType) => {
    switch (action.title) {
        case "CHANGE-FILTER-TODOLIST": {
            return state.map(el => el.id === action.payload.todolistId ? {...el, filter: action.payload.value} : el)
        }
        case "REMOVE-TODOLIST": {
            return state.filter(tl => tl.id != action.payload.id)
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.newTitle} : el)
        }
        case "ADD-TODOLIST": {
            let newTodolist: TodolistType = {
                id: action.payload.todolistID,
                title: action.payload.title,
                filter: 'all'
            };
            return [newTodolist, ...state]
        }
        default:
            return state
    }
}

type todolistReducerType = changeFilterType | addTodolistACType | removeTodolistACType | changeTodolistTitleACType
type changeFilterType = ReturnType<typeof changeFilterAC>
export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export type addTodolistACType = ReturnType<typeof addTodolistsAC>

export const changeFilterAC = (value: FilterValuesType, todolistId: string) => {
    return {
        title: 'CHANGE-FILTER-TODOLIST',
        payload: {
            value,
            todolistId
        }
    } as const
}
export const removeTodolistAC = (id: string) => {
    return {
        title: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}
export const changeTodolistTitleAC = (id: string, newTitle: string) => {
    return {
        title: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id,
            newTitle
        }
    } as const
}
export const addTodolistsAC = (title: string) => {
    return {
        title: 'ADD-TODOLIST',
        payload: {
            title,
            todolistID: v1()
        }
    } as const
}
