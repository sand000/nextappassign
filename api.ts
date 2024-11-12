import { ITask } from "./types/tasks";

const baseURL = "http://localhost:3001";

export const getTasks = async (): Promise<ITask[]> =>{
const res = await fetch(`${baseURL}/tasks`,{cache:"no-store"})
const todos = await res.json()
return todos;
}

export const addTodoTask= async(todo:ITask): Promise<ITask>=>{
const res = await fetch (`${baseURL}/tasks`,{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(todo)
})
const newTodo = await res.json();
return newTodo;
}

export const deleteTask= async (id:string):Promise<void>=>{
await fetch(`${baseURL}/tasks/${id}`,{
    method:"DELETE"
})

}

export const editTask= async (todo:ITask): Promise <ITask>=>{
    const res = await fetch(`${baseURL}/tasks/${todo.id}`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(todo)
    })
    const updatedTask = await res.json()
    return updatedTask;
    }