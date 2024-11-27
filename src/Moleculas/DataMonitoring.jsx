import React, { useEffect, useState } from "react";
import { Titles } from "../Atomos/Texts";
import { DoubleContainer } from './DoubleContainer';
import EChartsComponent from "./GfTemYHume";
import { Card, CardContent, Typography } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat"; 
import OpacityIcon from "@mui/icons-material/Opacity"; 
import LightbulbIcon from "@mui/icons-material/Lightbulb"; 
import PollIcon from "@mui/icons-material/Poll"; 
import WaterDropIcon from "@mui/icons-material/WaterDrop"; 

export function DataMonitoring() {
  const [plantId, setPlantId] = useState(() => localStorage.getItem("plantId") || "Sin Asignar");
  const [sensorData, setSensorData] = useState({
    temperature: null,
    humidity: null,
    light: null,
    airQuality: null,
    distance: null
  });
  const [graphData, setGraphData] = useState({
    temperatureData: [],
    humidityData: [],
    lightData: [],
    airQualityData: [],
    distanceData: []
  });

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetch("https://kingdomfungiback.integrador.xyz/api/statistics/");
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        console.log(data);
        const latestReading = data[data.length - 1]; // Último elemento del array

        if (latestReading) {
          const { 
            averageTemperature, averageHumidity, averageLight, airQuality, distancia, id_plant 
          } = latestReading;

          // Actualizar los datos de sensores
          setSensorData({
            temperature: averageTemperature,
            humidity: averageHumidity,
            light: averageLight,
            airQuality,
            distance: distancia
          });

          // Guardar en localStorage
          localStorage.setItem("temperature", averageTemperature);
          localStorage.setItem("humidity", averageHumidity);
          localStorage.setItem("light", averageLight);
          localStorage.setItem("airQuality", airQuality);
          localStorage.setItem("distance", distancia);

          // Actualizar los datos para las gráficas
          setGraphData(prevData => ({
            temperatureData: [...prevData.temperatureData.slice(-9), averageTemperature],
            humidityData: [...prevData.humidityData.slice(-9), averageHumidity],
            lightData: [...prevData.lightData.slice(-9), averageLight],
            airQualityData: [...prevData.airQualityData.slice(-9), airQuality === 'Pobre' ? 1 : (airQuality === 'Bueno' ? 3 : 2)],
            distanceData: [...prevData.distanceData.slice(-9), distancia]
          }));

          if (id_plant) {
            setPlantId(id_plant);
            localStorage.setItem("plantId", id_plant);
          }
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    }, 60000); // Actualizar cada minuto

    return () => clearInterval(intervalId);
  }, []);

  const getCardColor = (value, type) => {
    const thresholds = {
      temperature: { low: 15, high: 25, color: "red" },
      humidity: { low: 40, high: 80, color: "blue" },
      light: { low: 10, high: 90, color: "orange" },
      airQuality: { poor: "Pobre", good: "Bueno", color: "red" },
      distance: { low: 15, color: "blue" }
    };

    if (type === "temperature") {
      return value < thresholds.temperature.low || value > thresholds.temperature.high ? "red" : "green";
    } else if (type === "humidity") {
      return value < thresholds.humidity.low || value > thresholds.humidity.high ? "red" : "blue";
    } else if (type === "light") {
      return value < thresholds.light.low || value > thresholds.light.high ? "orange" : "green";
    } else if (type === "airQuality") {
      return value === thresholds.airQuality.poor ? "red" : value === thresholds.airQuality.good ? "green" : "orange";
    } else if (type === "distance") {
      return value < thresholds.distance.low ? "blue" : "red";
    }
    return "gray";
  };

  const chartOptions = {
    temperatureOptions: {
      title: { text: 'Temperatura (°C)' },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: Array.from({ length: 10 }, (_, i) => i + 1) },
      yAxis: { type: 'value', min: 0, max: 50 },
      series: [{ name: 'Temperatura', type: 'line', data: graphData.temperatureData, lineStyle: { color: (value) => (value < 15 || value > 25 ? 'red' : 'green') } }],
    },
    humidityOptions: {
      title: { text: 'Humedad (%)' },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: Array.from({ length: 10 }, (_, i) => i + 1) },
      yAxis: { type: 'value', min: 0, max: 100 },
      series: [{ name: 'Humedad', type: 'line', data: graphData.humidityData, lineStyle: { color: (value) => (value < 70 || value > 80 ? 'red' : 'blue') } }],
    },
    lightOptions: {
      title: { text: 'Intensidad de Luz' },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: Array.from({ length: 10 }, (_, i) => i + 1) },
      yAxis: { type: 'value', min: 0, max: 100 },
      series: [{ name: 'Luz', type: 'line', data: graphData.lightData, lineStyle: { color: (value) => (value < 10 || value > 90 ? 'orange' : 'green') } }],
    },
    airQualityOptions: {
      title: { text: 'Calidad del Aire' },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: Array.from({ length: 10 }, (_, i) => i + 1) },
      yAxis: { type: 'value', min: 0, max: 100 },
      series: [{ name: 'Calidad del Aire', type: 'line', data: graphData.airQualityData.map(val => val * 33.33), lineStyle: { color: (value) => (value < 50 ? 'red' : 'green') } }],
    },
    distanceOptions: {
      title: { text: 'Nivel de Agua (cm)' },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: Array.from({ length: 10 }, (_, i) => i + 1) },
      yAxis: { type: 'value', min: 0, max: 100 },
      series: [{ name: 'Nivel de Agua', type: 'bar', data: graphData.distanceData, itemStyle: { color: (params) => (params.value > 15 ? 'red' : 'green') } }],
    }
  };

  return (
    <>
      <div className="w-full h-full p-6">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-5">
          {['temperature', 'humidity', 'light', 'airQuality', 'distance'].map((sensor, index) => (
            <Card key={index} sx={{ backgroundColor: getCardColor(sensorData[sensor], sensor) }}>
              <CardContent>
                {sensor === 'temperature' && <ThermostatIcon sx={{ fontSize: 40, color: "white" }} />}
                {sensor === 'humidity' && <OpacityIcon sx={{ fontSize: 40, color: "white" }} />}
                {sensor === 'light' && <LightbulbIcon sx={{ fontSize: 40, color: "white" }} />}
                {sensor === 'airQuality' && <PollIcon sx={{ fontSize: 40, color: "white" }} />}
                {sensor === 'distance' && <WaterDropIcon sx={{ fontSize: 40, color: "white" }} />}
                <Typography variant="h6" color="white">{sensor.charAt(0).toUpperCase() + sensor.slice(1)}</Typography>
                <Typography variant="h4" color="white">{sensorData[sensor] !== null ? `${sensorData[sensor]} ${sensor === 'temperature' ? '°C' : sensor === 'humidity' ? '%' : sensor === 'light' ? 'lx' : sensor === 'distance' ? 'cm' : ''}` : "Cargando..."}</Typography>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>

      <DoubleContainer>
        <article className="w-full h-full p-6">
          <header className="mt-3">
            <Titles text={`Datos de Monitoreo`} />
          </header>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-5">
            {Object.values(chartOptions).map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <EChartsComponent option={option} style={{ width: '100%', height: '400px' }} />
              </div>
            ))}
          </section>
        </article>
      </DoubleContainer>
    </>
  );
}


