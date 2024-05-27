"use client";
import { useRouter } from "next/navigation";
import React from "react";

function TaskCard({ task }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    if (window.confirm("Quieres eliminar este turno?")) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.status === 204) {
        router.refresh();
      }
    }
  };

  const handleTaskDone = async (id) => {
    console.log(id);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/${id}/reparado/`,
      {
        method: "POST",
      }
    );
    if (res.status === 200) {
      router.refresh();
    }
  };
  return (
    <div className=" bg-slate-500 px-1 py-2 mb-2 rounded-md text-slate-200 flex justify-items-center items-center container ">
      <div className="datos gap rounded-md to-black">
        <h2 className="text-center  ">
          <strong className="text-sky-400/100 p-5">Vehiculo:</strong> <br />
          {task.vehiculo}
          {task.reparado && <span> ✅</span>}{" "}
        </h2>
        <h2 className="text-center">
          <strong className="text-sky-400/100 p-5">Dueño:</strong> <br />
          <p>{task.dueño}</p>
        </h2>
        <h2 className="text-center">
          <strong className="text-sky-400/100 p-5">Reparacion:</strong> <br />
          <p>{task.falla}</p>
        </h2>
        <h2 className="text-center">
          <strong className="text-sky-400/100 p-5">Fecha:</strong> <br />
          <p className="px-5">{task.fecha}</p>
        </h2>
      </div>
      <div className="flex justify-between gap-x-2">
        <button
          className="text-white rounded p-2 bg-green-500 max-w-20"
          onClick={() => handleTaskDone(task.id)}
        >
          Vehiculo Reparado
        </button>

        <button
          className="text-white rounded p-2 bg-red-500 max-w-20"
          onClick={() => handleDelete(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
