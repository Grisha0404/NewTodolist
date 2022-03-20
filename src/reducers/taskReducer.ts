import {TasksStateType} from "../App";


export const taskReducer = (state: TasksStateType, action: taskReducerType): TasksStateType => {
    switch (action.title) {
        case 'REMOVE-TASK': {
            const stateCopy = {...state}
            let todolistTasks = stateCopy[action.payload.todolistId]
            stateCopy[action.payload.todolistId] = todolistTasks.filter(t => t.id != action.payload.id)
            return {...stateCopy}
        }
        case "ADD_TASK": {
            const stateCopy = {...state}
            let task = {id: action.payload.newID, title: action.payload.title, isDone: false};
            let todolistTasks = stateCopy[action.payload.todolistId];
            stateCopy[action.payload.todolistId] = [task, ...todolistTasks];
            return {...stateCopy}

        }
        case "CHANGE-STATUS-TASK": {
            const stateCopy = {...state}
            let todolistTasks = stateCopy[action.payload.todolistId];
            let task = todolistTasks.find(t => t.id === action.payload.id);
            if (task) {
                task.isDone = action.payload.isDone

            }
            return {...stateCopy}
        }
        case "CHANGE-TITLE-TASK": {
            const stateCopy = {...state}
            let todolistTasks = stateCopy[action.payload.todolistId];
            let task = todolistTasks.find(t => t.id === action.payload.id);
            if (task) {
                task.title = action.payload.newValue;
            }
            return {...stateCopy}
        }
        case "REMOVE_TASK": {
            const stateCopy = {...state}
            delete stateCopy[action.payload.id]
            return {...stateCopy}
        }
        case "ADD-TASK-TODOLISTA": {
            return {...state, [action.payload.newTodolistId]: []}
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
    | removeTodolistACType
    | changeTaskTitleACType

export type removeTaskACType = ReturnType<typeof removeTaskAC>
export type addTaskACType = ReturnType<typeof addTaskAC>
export type changeStatusACType = ReturnType<typeof changeStatusAC>
export type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export type addTodolistACType = ReturnType<typeof addTodolistAC>

export const removeTaskAC = (id: string, todolistId: string) => {
    return {
        title: 'REMOVE-TASK',
        payload: {
            id,
            todolistId
        }
    } as const
}
export const addTaskAC = (title: string, todolistId: string, newID: string) => {
    return {
        title: 'ADD_TASK',
        payload: {
            title,
            todolistId,
            newID
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
            newValue,
            id,
            todolistId
        }
    } as const
}
export const removeTodolistAC = (id: string) => {
    return {
        title: 'REMOVE_TASK',
        payload: {
            id
        }
    } as const
}
export const addTodolistAC = (title: string, newTodolistId: string) => {
    return {
        title: "ADD-TASK-TODOLISTA",
        payload: {title, newTodolistId}
    } as const
}