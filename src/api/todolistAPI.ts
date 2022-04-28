import axios from "axios";

type TodoType = {
    id: string,
    title: string,
    addedDate: string,
    order: number,
}

type CommonTodoType<T = {}> = {
    resultCode: number
    messages: string[],
    data: T,
    fieldsErrors: string[],
}

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        withCredentials: true,
        headers: {
            'API-KEY': 'ec9357aa-327b-4213-99ec-0ffb01e452b5'
        }
    }
)

export const todoListApi = {
    getTodos: () => {
        return instance.get<TodoType[]>('todo-lists')

    },
    createTodos: () => {
        return instance.post<CommonTodoType<{
            item: TodoType
        }>>('todo-lists', {title: 'NewTodoList'})
    },
    deleteTodos: () => {
        return instance.delete<CommonTodoType>('todo-lists/{0a93e048-27bb-4551-9987-21bcf66f5dfb}')
    },
    updateTodos: () => {
        return instance.put<CommonTodoType>('todo-lists/{0a93e048-27bb-4551-9987-21bcf66f5dfb}', {title: 'React'})
    }
}