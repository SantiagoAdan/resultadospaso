import React from "react";
import JSONDATA from "../resultados.json";
import { useState } from "react";

function Datos() {
  const [searchTerm, setSearchTem] = useState("");
  return (
    <div>
      <input
        className="form-control"
        type="text"
        placeholder="BUSCAR POR PROVINCIA/PARTIDO"
        onChange={(event) => {
          setSearchTem(event.target.value);
        }}
      />

      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.provincia.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div>
            <table className="table text-center container" key={key}>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">PROVINCIA</th>
                  <th scope="col">PARTIDO</th>
                  <th scope="col">PORCENTAJE</th>
                  <th scope="col">VOTOS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{val.id}</th>
                  <td>{val.provincia}</td>
                  <td>{val.partido}</td>
                  <td>{val.porcentaje}</td>
                  <td>{val.votos}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Datos;
