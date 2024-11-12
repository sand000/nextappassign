"use client"
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { addTodoTask } from "@/api";
import {v4 as uuidv4} from "uuid"
import React, { FormEventHandler, useState } from 'react'

const AddTask = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>("")
  const router = useRouter()
  
  const handleSubmitTask: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault()
      await addTodoTask({
          id: uuidv4(),
          text: text
      });
      setText("")
      setModalOpen(false)
      router.refresh();
  }
  return (
    <div > 
    <button 
    onClick={()=>setModalOpen(true)}
    className="btn btn-primary w-full">Add New Task
    <AiOutlinePlus size={18}/>
    </button>
    <Modal modalOpen={modalOpen}
    setModalOpen={setModalOpen}>
      <form onSubmit={handleSubmitTask}>
                    <h1>Add New task</h1>
                    <input
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <button className='btn ml-2' type='submit'>Submit</button>
                </form>
      </Modal>
    
    </div>
  )
}

export default AddTask
