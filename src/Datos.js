import React from "react";
import { useState } from "react";
import { Component } from "react/cjs/react.production.min";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

function Datos() {
  const columnas = [
    {
      title: "Provincia",
      field: "provincia",
    },
    {
      title: "Partido",
      field: "partido",
    },
    {
      title: "Porcentaje",
      field: "porcentaje",
    },
    {
      title: "Votos",
      field: "votos",
      type: "numeric",
    },
  ];

  const data = [
    {
      id: 1,
      provincia: "CABA",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "47,01%",
      votos: 15,
    },
    {
      id: 2,
      provincia: "BUENOS AIRES",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "39,81%",
      votos: 44,
    },
    {
      id: 3,
      provincia: "SANTA FE",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "40,23%",
      votos: 38,
    },
    {
      id: 4,
      provincia: "CORDOBA",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "54.04%",
      votos: 87,
    },
    {
      id: 5,
      provincia: "MENDOZA",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "49,54%",
      votos: 77,
    },
    {
      id: 6,
      provincia: "ENTRE RIOS",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "54,52%",
      votos: 51,
    },
    {
      id: 7,
      provincia: "CATAMARCA",
      partido: "FRENTE DE TODOS",
      porcentaje: "50,65%",
      votos: 15,
    },
    {
      id: 8,
      provincia: "CORRIENTES",
      partido: "ECO+VAMOS CORRIENTES",
      porcentaje: "58,91%",
      votos: 99,
    },
    {
      id: 9,
      provincia: "CHUBUT",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "37,95%",
      votos: 94,
    },
    {
      id: 10,
      provincia: "CHACO",
      partido: "FRENTE DE TODOS",
      porcentaje: "44,33%",
      votos: 89,
    },
    {
      id: 11,
      provincia: "FORMOSA",
      partido: "FRENTE DE TODOS",
      porcentaje: "57,81%",
      votos: 90,
    },
    {
      id: 12,
      provincia: "JUJUY",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "49,05%",
      votos: 46,
    },
    {
      id: 13,
      provincia: "LA PAMPA",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "48.01%",
      votos: 41,
    },
    {
      id: 14,
      provincia: "LA RIOJA",
      partido: "FRENTE DE TODOS",
      porcentaje: "56,06%",
      votos: 8,
    },
    {
      id: 15,
      provincia: "MISIONES",
      partido: "JUNTOS POR EL CAMBIO",
      porcentaje: "40,91%",
      votos: 86,
    },
    {
      id: 16,
      provincia: "NEUQUEN",
      partido: "MOVIMIENTO POPULAR NEUQUENINO",
      porcentaje: "29,42%",
      votos: 95,
    },
    {
      id: 17,
      provincia: "RIO NEGRO",
      partido: "JUNTOS SOMOS RIO NEGRO",
      porcentaje: "37,27%",
      votos: 99,
    },
    {
      id: 18,
      provincia: "SALTA",
      partido: "FRENTE DE TODOS",
      porcentaje: "32,37%",
      votos: 44,
    },
    {
      id: 19,
      provincia: "SAN JUAN",
      partido: "FRENTE DE TODOS",
      porcentaje: "43,46%",
      votos: 67,
    },
    {
      id: 20,
      provincia: "SAN LUIS",
      partido: "UNIDOS POR SAN LUIS",
      porcentaje: "46,07%",
      votos: 2,
    },
    {
      id: 21,
      provincia: "SANTA CRUZ",
      partido: "UNIDOS POR SAN LUIS",
      porcentaje: "46,07%",
      votos: 3,
    },
    {
      id: 22,
      provincia: "SANTA CRUZ",
      partido: "CAMBIA SANTA CRUZ",
      porcentaje: "35,02%",
      votos: 60,
    },
    {
      id: 23,
      provincia: "SANTIAGO DEL ESTERO",
      partido: "FRENTE CIVICO POR SANTIAGO",
      porcentaje: "63,50%",
      votos: 1,
    },
    {
      id: 24,
      provincia: "TIERRA DEL FUEGO",
      partido: "FRENTE DE TODOS",
      porcentaje: "39,67%",
      votos: 1,
    },
    {
      id: 25,
      provincia: "TUCUMAN",
      partido: "FRENTE DE TODOS",
      porcentaje: "42,15%",
      votos: 71,
    },
  ];

  return (
    <div>
      <Navbar />
      <MaterialTable
        columns={columnas}
        data={data}
        title="RESULTADOS PASO 2021"
        actions={[
          {
            icon: "edit",
            tooltip: "editar resultado",
            onClick: (event, rowData)=>alert('Has presionado editar resultado: '+rowData.provincia)
          },
          {
            icon: "delete",
            tooltip: "Eliminar resultado",
            onClick: (event, rowData)=>window.confirm('Estas seguro que quieres eliminar el resultado de '+rowData.provincia+'?')
          }
        ]}
        options={{
          actionsColumnIndex:-1
        }}
        localization={{
          header:{
            actions:'Acciones'
          }
        }}
      />

      <Footer />
    </div>
  );
}

export default Datos;
