import React from "react";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import MaterialTable from "material-table";
import axios from "axios";
import { Modal, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const baseUrl = "http://localhost:3002/resultados";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

function Datos() {
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [ModalInsertar, setModalInsertar] = useState(false);
  const [ModalEditar, setModalEditar] = useState(false);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState({
    id: "",
    partido: "",
    porcentaje: "",
    provincia: "",
    votos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProvinciaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const peticionesGet = async () => {
    await axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  };

  const peticionPost = async () => {
    await axios.post(baseUrl, provinciaSeleccionada).then((response) => {
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    });
  };

  const peticionPut = async () => {
    await axios.put(baseUrl+"/"+provinciaSeleccionada.id, provinciaSeleccionada)
    .then((response) => {
      var dataNueva = data;
      dataNueva.map(provincia=>{
        if(provincia.id===provinciaSeleccionada.id){
          provincia.provincia=provinciaSeleccionada.provincia;
          provincia.partido=provinciaSeleccionada.partido;
          provincia.porcentaje=provinciaSeleccionada.porcentaje;
          provincia.votos=provinciaSeleccionada.votos;

        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    });
  };

  const seleccionarProvincia = (provincia, caso) => {
    setProvinciaSeleccionada(provincia);
    caso === "Editar" && abrirCerrarModalEditar();
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!ModalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!ModalEditar);
  };

  useEffect(() => {
    peticionesGet();
  }, []);

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nuevo Resultado</h3>
      <TextField
        className={styles.inputMaterial}
        label="Provincia"
        name="provincia"
        onChange={handleChange}
      ></TextField>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Partido"
        name="partido"
        onChange={handleChange}
      ></TextField>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Porsentaje"
        name="porcentaje"
        onChange={handleChange}
      ></TextField>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Votos"
        name="votos"
        onChange={handleChange}
      ></TextField>
      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPost()}>
          Insertar
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Resultado</h3>
      <TextField
        className={styles.inputMaterial}
        label="Provincia"
        name="provincia"
        onChange={handleChange}
        value={provinciaSeleccionada && provinciaSeleccionada.provincia}
      ></TextField>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Partido"
        name="partido"
        onChange={handleChange}
        value={provinciaSeleccionada && provinciaSeleccionada.partido}
      ></TextField>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Porsentaje"
        name="porcentaje"
        onChange={handleChange}
        value={provinciaSeleccionada && provinciaSeleccionada.porcentaje}
      ></TextField>
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Votos"
        name="votos"
        onChange={handleChange}
        value={provinciaSeleccionada && provinciaSeleccionada.votos}
      ></TextField>
      <br />
      <div align="right">
        <Button color="primary">
          Insertar
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <Button onClick={() => abrirCerrarModalInsertar()}>
        Insertar Resultado
      </Button>
      <MaterialTable
        columns={columnas}
        data={data}
        title="RESULTADOS PASO 2021"
        actions={[
          {
            icon: "edit",
            tooltip: "editar resultado",
            onClick: (event, rowData) =>
              seleccionarProvincia(rowData, "Editar"),
          },
          {
            icon: "delete",
            tooltip: "Eliminar resultado",
            onClick: (event, rowData) =>
              window.confirm(
                "Estas seguro que quieres eliminar el resultado de " +
                  rowData.provincia +
                  "?"
              ),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: "Acciones",
          },
        }}
      />
      <Modal open={ModalInsertar} onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>
      <Modal open={ModalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
      <Footer />
    </div>
  );
}

export default Datos;
