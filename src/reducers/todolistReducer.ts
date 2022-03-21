import {FilterValuesType, TodolistType} from "../App";

export const todolistReducer = (state: Array<TodolistType>, action: todolistReducerType) => {
    switch (action.title) {
        case "CHANGE-FILTER": {
            const stateCopy = {...state}
            let todolist = stateCopy.find(tl => tl.id === action.payload.todolistId);
            if (todolist) {
                todolist.filter = action.payload.value;

            }
            return [...stateCopy]

        }
        case "FILTER-TODOLIST": {
            const stateCopy = {...state}
            return stateCopy.filter(tl => tl.id != action.payload.id)

        }
        case "CHANGE": {
            const stateCopy = {...state}
            const todolist = stateCopy.find(tl => tl.id === action.payload.id);
            if (todolist) {
                // если нашёлся - изменим ему заголовок
                todolist.title = action.payload.title;
            }
            return [...stateCopy]
        }
        case "ADD":{
            const stateCopy = {...state}
            let newTodolist: TodolistType = {id: action.payload.newTodolistId, title: action.payload.title, filter: 'all'};
        return [newTodolist, ...stateCopy]
        }

        default:
            return state
    }
}

type todolistReducerType = changeFilterType | addTodolistACType | cremoveTodolistACType | changeTodolistTitleACType
type changeFilterType = ReturnType<typeof changeFilterAC>
type cremoveTodolistACType = ReturnType<typeof removeTodolistsAC>
type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
type addTodolistACType = ReturnType<typeof addTodolistsAC>

export const changeFilterAC = (value: FilterValuesType, todolistId: string) => {
    return {
        title: 'CHANGE-FILTER',
        payload: {
            value,
            todolistId
        }
    } as const
}
export const removeTodolistsAC = (id: string) => {
    return {
        title: 'FILTER-TODOLIST',
        payload: {id}
    } as const
}
export const changeTodolistTitleAC = (id: string, title: string) => {
    return {
        title: 'CHANGE',
        payload: {
            id,
            title
        }
    } as const
}
export const addTodolistsAC = (title: string, newTodolistId:string) => {
    return {
        title: 'ADD',
        payload: {
            title,
            newTodolistId
        }
    } as const
}
