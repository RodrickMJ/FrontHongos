import React, { useEffect, useState } from "react";
import SensorDataTable from "./SensorTable"

function SensorHistory() {
  const [data, setData] = useState([]); // Datos de los sensores
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Errores al obtener datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Iniciando solicitud al backend...");
        const response = await fetch(
          "https://kingdomfungiback.integrador.xyz/api/sensors/readings"
        );
  
        console.log("Respuesta recibida:", response);
  
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
  
        const result = await response.json();
        console.log("Datos JSON parseados:", result);
  
        setData(result);
      } catch (error) {
        console.error("Error durante la solicitud:", error.message);
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
    <section>
      <h1>Historial de Sensores</h1>
      <SensorDataTable data={data} className="sensor-table" />
    </section>
  );
}

export default SensorHistory;
