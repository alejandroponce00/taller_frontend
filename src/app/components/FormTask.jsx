"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function FormTask() {
  const [vehiculo, setVehiculo] = useState("");
  const [dueño, setDueño] = useState("");
  const [falla, setFalla] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`,
      {
        method: "POST",
        body: JSON.stringify({ vehiculo, dueño, falla }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    router.refresh();
  };

  return (
    <div className="divform bg-slate-200 p-2 h-fi block">
      <form onSubmit={handleSubmit}>
        <h1 className="text-white font-bold text-xl">Añadir Turno</h1>
        <p className="text-md text-white">vehiculo:</p>
        <input
          type="text"
          name="vehiculo"
          className="bg-slate-400 rounded-md p-2  mb-2 block w-full text-slate-800"
          onChange={(e) => setVehiculo(e.target.value)}
        />
        <p className="text-md text-white">Dueño:</p>
        <input
          type="text"
          name="dueño"
          className="bg-slate-400 rounded-md p-2  mb-2 block w-full text-slate-800"
          onChange={(e) => setDueño(e.target.value)}
        />
        <p className="text-md text-white">Reparacion</p>
        <textarea
          name="Falla"
          className="bg-slate-400 rounded-md p-2 mb-2 block w-full text-slate-800"
          onChange={(e) => setFalla(e.target.value)}
        ></textarea>

        <button
          type="submit"
          value="Save"
          className="bg bg-indigo-400 text-black font-bold rounded-md p-2 block w-full"
        >
          Guardar Turno
        </button>
      </form>
    </div>
  );
}

export default FormTask;
