import { Logo } from "./ImgHome";

export function Navigation() {
  return (
    <>
      <nav className=" bg-[#A2A746] p-3 w-full">
        <ul className="flex flex-col md:flex-row text-white items-center justify-around">
          <li className="flex items-center mb-4 md:mb-0">
            <Logo />
          </li>
          <li className="md:mb-0 mb-4">
            <a
              href="/Monitoreo"
              className="block text-center p-2 hover:bg-white hover:text-black transition-colors duration-200"
            >
              Monitoreo
            </a>
          </li>
          <li className="md:mb-0 mb-4">
            <a
              href="/Predicciones"
              className="block text-center p-2 hover:bg-white hover:text-black transition-colors duration-200"
            >
              Predicciones
            </a>
          </li>
          <li className="md:mb-0 mb-4">
            <a
              href="/Tendencias"
              className="block text-center p-2 hover:bg-white hover:text-black transition-colors duration-200"
            >
              Tendencias
            </a>
          </li>
          <li className="md:mb-0 mb-4">
            <a
              href="/Historial"
              className="block text-center p-2 hover:bg-white hover:text-black transition-colors duration-200"
            >
              Historial
            </a>
          </li>
          <li className="md:mb-0">
            <a
              href="/"
              className="block text-center p-2 hover:bg-white hover:text-black transition-colors duration-200"
            >
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
