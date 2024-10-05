import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";
import Image from "next/image";

export const dynamic = "force-dynamic";

function HomePage() {
  return (
    <div className="  mx-5 ">
      <h1 className="titulo text-center p-8 max-sm:text-lg">
        Turnos Taller Mecanico
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
          priority={true}
          
        />
        <FormTask />
        <ListTask />
      </div>
    </div>
  );
}

export default HomePage;
