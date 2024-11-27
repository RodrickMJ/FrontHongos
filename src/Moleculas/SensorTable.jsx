import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function SensorDataTable({ data, className }) {
  console.log(data)
  // Validar si 'data' no es un arreglo
  if (!Array.isArray(data)) {
    return <div>No hay datos válidos para mostrar.</div>;
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <TableContainer component={Paper}>
        <Table aria-label="sensor readings table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>ID Planta</TableCell>
              <TableCell>Luz 1</TableCell>
              <TableCell>Luz 2</TableCell>
              <TableCell>Temp 1</TableCell>
              <TableCell>Hum 1</TableCell>
              <TableCell>Temp 2</TableCell>
              <TableCell>Hum 2</TableCell>
              <TableCell>Temp 3</TableCell>
              <TableCell>Hum 3</TableCell>
              <TableCell>MQ2 Valor</TableCell>
              <TableCell>MQ2 Voltaje</TableCell>
              <TableCell>Distancia</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item._id || index}>
                <TableCell>{item._id}</TableCell>
                <TableCell>{item.id_plant}</TableCell>
                <TableCell>{item.luz1}</TableCell>
                <TableCell>{item.luz2}</TableCell>
                <TableCell>{item.temp1}</TableCell>
                <TableCell>{item.hum1}</TableCell>
                <TableCell>{item.temp2}</TableCell>
                <TableCell>{item.hum2}</TableCell>
                <TableCell>{item.temp3}</TableCell>
                <TableCell>{item.hum3}</TableCell>
                <TableCell>{item.mq2_value}</TableCell>
                <TableCell>{item.mq2_voltage}</TableCell>
                <TableCell>{item.distancia}</TableCell>
                <TableCell>
                  {new Date(item.timestamp).toLocaleString("es-ES")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SensorDataTable;
