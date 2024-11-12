import { ITask } from '@/types/tasks'
import React from 'react'
import Tasks from './Tasks'

 interface TodoListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((e) => (
                       <Tasks key={e.id} task={e}/>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default TodoList