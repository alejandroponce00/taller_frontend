
import TaskCard from "./TaskCard";



async function loadTasks() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/tasks/`);
  const tasks = await res.json();
  return tasks;
}

async function ListTask() {
  const tasks = await loadTasks();
  console.log(tasks);
 

  return (
    
    <div className="divform bg-slate-700 p-4 w-full flow-root ">
      <h1 className="text-slate-200 text-xl text-center">Lista de Turnos</h1>

      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
     
    
  );
  
}

export default ListTask;
