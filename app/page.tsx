import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getTasks } from "@/api";

export default async function Home() {
  const tasks = await getTasks();
  return (
    <main className="max-w-4xl bg-white-400 mx-auto mt-4">
      <div className="text-center flex my-5 flex-col gap-5">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <AddTask/>
        </div>
        <TodoList tasks={tasks}/>
    </main>


  );
}
