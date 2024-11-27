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

function TendDataTable({ data, className }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <TableContainer component={Paper}>
        <Table aria-label="history table">
          <TableHead>
            <TableRow>
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
                Métrica
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
                Tendencia
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
                Tasa de Cambio
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
              <TableRow
                key={item._id || index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                }}
              >
                <TableCell>{item.metric || "N/A"}</TableCell>
                <TableCell>{item.trend || "N/A"}</TableCell>
                <TableCell>
                  {item.rateOfChange ? item.rateOfChange.toFixed(2) : "N/A"}
                </TableCell>
                <TableCell>
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleString()
                    : "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TendDataTable;
