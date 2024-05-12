import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";
import Image from "next/image";

export const dynamic = "force-dynamic";

function HomePage() {
  return (
    <div className=" container mx-auto ">
      <h1 className="text-center p-8 text-xl text-blue-200 ">
        Administrador de Turnos de Taller Mecanico
      </h1>
      <div className="divform flex gap-x-10   md:flex-col  sm:flex-col">
        {" "}
        <Image
          alt="fondo"
          src={"/imagenes/IMG_8598.jpg"}
          className="imagen"
          // width={"560"}
          //height={"200"}
          fill={true}
        />
        <FormTask />
        <ListTask />
      </div>
    </div>
  );
}

export default HomePage;
