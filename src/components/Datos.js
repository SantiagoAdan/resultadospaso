import React, { useEffect, useState } from "react";

function useDatos() {
  const [resultados, setPostres] = useState([]);

  useEffect(() => {
    fetch("json/resultados.json")
      .then((response) => response.json())
      .then((datos) => {
        setPostres(datos);
      });
  }, []);

  return resultados;
}

export default function Datos() {
  const resultados = useDatos();

  return (
    <div className="container" align="center"><div class="dropdown">
    <hr />
    <p className="display-6">PARTIDOS GANADORES LEGISLATIVAS 2021 </p>
    <hr />
  </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">PROVINCIA</th>
                <th scope="col">PARTIDO</th>
                <th scope="col">PORCENTAJE</th>
                <th scope="col">VOTOS</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.provincia}</td>
                  <td>{item.partido}</td>
                  <td>{item.porcentaje}</td>
                  <td>{item.votos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
