import {TaskType} from "../Todolist";

export const tasksReducer = (state:TaskType[], action:tasksReducerType) => {
    switch (action.title){
        case "REMOVE-TASKS":{
            /* let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);*/
            return state.filter(t => t.id != action.payload.id)
        }
        case "ADD-TASK":{
             let task = { id: action.payload.newID, title: action.payload.title, isDone: false };
             return [task,...state]
        /*let newTasks = [task, ...tasks];
        setTasks(newTasks);*/
        }
        default: return state
    }
}
export type tasksReducerType = removeTaskACType | addTaskType
export type removeTaskACType=ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string)=>{
    return{
        title:'REMOVE-TASKS',
        payload:{
            id
        }
    }as const
}

export type addTaskType=ReturnType<typeof addTaskAC>

export const addTaskAC = (title:string, newID:string)=>{
    return{
        title: 'ADD-TASK',
        payload:{
            newID,
            title
        }
    }as const
}