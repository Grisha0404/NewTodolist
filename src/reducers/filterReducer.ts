import {FilterValuesType} from "../App";


export const filterReducer = (state:FilterValuesType, action:filterReducerType)=>{
    switch (action.title){
        case "CHANGE-FILTER":{
            return action.payload.value
        }
        default: return state
    }
}

export type filterReducerType = changeFilterACType
export type changeFilterACType= ReturnType<typeof changeFilterAC>

export const changeFilterAC =(value: FilterValuesType)=>{
    return{
        title: "CHANGE-FILTER",
        payload:{
            value
        }
    }
}