import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function DataTable({ data, className }) {
  
  return (
    <div className={`overflow-x-auto ${className}`}>
      <TableContainer component={Paper}>
        <Table aria-label="history table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED", // Color de fondo para el encabezado
                  color: "black", // Color del texto
                  fontWeight: "bold", // Hacer el texto en negrita
                  padding: "12px", // Aumentar el padding
                  fontSize: "16px", // Tamaño de la fuente
                  borderBottom: "2px solid #1565c0", // Borde inferior
                }}
              >
                Rango de tiempo
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Temperatura Promedio
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Humedad Promedio
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Luz Promedio
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Calidad del Aire
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Estado del Agua
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                MQ2
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Distancia
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Probabilidad Temp
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Probabilidad Hum
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  backgroundColor: "#6495ED",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px",
                  fontSize: "16px",
                  borderBottom: "2px solid #1565c0",
                }}
              >
                Fecha
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item._id} sx={{ backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff" }}>
                <TableCell>{item.timeRange}</TableCell>
                <TableCell>{item.averageTemperature.toFixed(2)}°C</TableCell>
                <TableCell>{item.averageHumidity.toFixed(2)}%</TableCell>
                <TableCell>{item.averageLight.toFixed(2)} lx</TableCell>
                <TableCell>{item.airQuality}</TableCell>
                <TableCell>{item.waterLevelStatus}</TableCell>
                <TableCell>{item.mq2_value}</TableCell>
                <TableCell>{item.distancia} mm</TableCell>
                <TableCell>{item.temperatureProbability}%</TableCell>
                <TableCell>{item.humidityProbability}%</TableCell>
                <TableCell>{new Date(item.createdAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DataTable;
