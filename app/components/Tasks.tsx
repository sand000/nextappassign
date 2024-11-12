"use client"
import { ITask } from '@/types/tasks'
import React, { FormEventHandler, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Modal from './Modal';
import { deleteTask, editTask } from '@/api';
import { useRouter } from 'next/navigation';
interface TaskProps {
  task: ITask
}
const Tasks: React.FC<TaskProps> = ({ task }) => {
  const [modelEdit, setMOdalEdit] = useState<boolean>(false)
  const [modelDelete, setMOdalDelete] = useState<boolean>(false)
  const [editedText, setEditedText] = useState<string>(task.text)
const router = useRouter()

  const handleEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await editTask({
      id: task.id,
      text: editedText
    })
    setMOdalEdit(false)
    router.refresh()
  }
  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    setMOdalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-4'>
        < FiEdit onClick={() => setMOdalEdit(true)} cursor={"pointer"} className='text-blue-500' size={18} />
        <Modal modalOpen={modelEdit}
          setModalOpen={setMOdalEdit}>
          <form onSubmit={handleEditTask}>
            <h1>Edit task</h1>
            <input
              onChange={(e) => setEditedText(e.target.value)}
              value={editedText}
              type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className='btn ml-2' type='submit'>Submit</button>
          </form>
        </Modal>
        < MdDelete onClick={() => setMOdalDelete(true)}  cursor={"pointer"} className='text-red-500' size={18} />
        <Modal modalOpen={modelDelete}
          setModalOpen={setMOdalDelete}>
            <h1>Are you sure you want to delete the task</h1>
            <button onClick={()=>handleDeleteTask(task.id)} className='btn ml-2' >yes</button>
        </Modal>
    </td>
    </tr> 

)
}

export default Tasks