import { AuthContainer } from "../Moleculas/AuthContainer";
import { ImgHome } from "../Moleculas/ImgHome";
import { CardData } from "../Moleculas/CardDate";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputT } from "../Atomos/Input";
import { Paragraphs } from "../Atomos/Texts";
import { ButtonI } from "../Atomos/Button";

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.password) {
      try {
        const response = await fetch("https://kingdomfungiback.integrador.xyz/api/auth/access", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Login exitoso:", data);

          // Guardar el token y cualquier otro dato relevante en el almacenamiento local
          localStorage.setItem("token", data.token); // Suponiendo que la respuesta contiene un token
          localStorage.setItem("userId", data.userId); // Suponiendo que la respuesta contiene un ID de usuario

          // Redirigir al usuario a la página de monitoreo
          navigate("/Monitoreo");
        } else {
          const errorData = await response.json();
          console.error("Error de inicio de sesión:", errorData);
          setError("Correo electrónico y contraseña no coinciden.");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
        setError("Error en la solicitud. Por favor, intenta de nuevo.");
      }
    } else {
      setError("Todos los campos son requeridos.");
    }
  };

  return (
    <seccion className={`w-full h-screen flex`}>
      <AuthContainer className="flex sm:flex-row flex-col items-center justify-center bg-black animate-fade-right animate-duration-[2000ms]">
        <ImgHome />
        <CardData text="Login">
          <form className="flex flex-col w-full sm:w-4/5 mt-10" onSubmit={handleLogin}>
            <label className="flex flex-col mt-4">
              <Paragraphs text="Nombre:" />
              <InputT
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label className="flex flex-col mt-4">
              <Paragraphs text="Correo Electrónico:" />
              <InputT
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label className="flex flex-col mt-4">
              <Paragraphs text="Contraseña:" />
              <InputT
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
              />
            </label>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <nav className="mt-7 flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-2 sm:space-y-0">
              <a className="text-gray-300 no-underline hover:text-gray-400" href="Formulario">Regístrate</a>
            </nav>

            <div className="flex justify-center mt-4">
              <ButtonI type="submit" text="Iniciar Sesión" />
            </div>
          </form>
        </CardData>
      </AuthContainer>
    </seccion>
  );
}
