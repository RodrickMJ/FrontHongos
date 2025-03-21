import React, { useEffect, useState } from "react";
import { Titles } from "../Atomos/Texts";
import { DoubleContainer } from "./DoubleContainer";
import DataTable from "./Table";

export function History() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener el ID de la planta del localStorage
    const idPlant = localStorage.getItem("plantId");
    if (!idPlant) {
      setError("No se encontró el ID de la planta en el localStorage.");
      setLoading(false);
      return;
    }

    // Fetch de los datos
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://kingdomfungiback.integrador.xyz/api/predictions/predictions/${idPlant}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DoubleContainer className="flex flex-col">
      <article className="flex flex-col flex-grow p-5 overflow-hidden">
        <header>
          <Titles text="Historial de datos" />
        </header>
        <section className="flex-grow flex flex-col mt-3 overflow-hidden">
          {data.length > 0 ? (
            <DataTable className="flex-grow overflow-auto" data={data} />
          ) : (
            <div>No hay datos disponibles</div>
          )}
        </section>
      </article>
    </DoubleContainer>
  );
}
