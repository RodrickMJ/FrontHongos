import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Organismos/Login";
import { LoginForm } from "./Organismos/Loginform";
import { Monitoring } from "./Organismos/Monitoring";
import { Historial } from "./Organismos/Historial";
import { SensorHistorial } from "./Organismos/SensorHistory"
import { TendHistorial } from "./Organismos/TendHistory";

function App() {
  return (

    <Router>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Formulario" element={<LoginForm />} />
        <Route path="/Monitoreo" element={<Monitoring />} />
        <Route path="/Predicciones" element={<Historial />} />
        <Route path="/Tendencias" element={<TendHistorial />} />
        <Route path="/Historial" element={<SensorHistorial />} />
      </Routes>


    </Router>

  );
}

export default App;
