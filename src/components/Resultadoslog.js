import React, { useEffect, useState } from "react";

function useResultados(){
    const [resultados, setResultados] = useState([])
    useEffect(()=> {
        fetch('resultados\src\components\resultados.json')
        .then(response => response.json())
        .then(datos => {
            setResultados(datos)
        })
    }, [])
    return resultados
}

export default function Resultados(){

    const resultados = useResultados()
    return (
<div>
<h4 className='text-center'>PARTIDO GANADOR POR PROVINCIA</h4>

        <table className="table container">
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
        {resultados.map(item => (

<tr key={item.id}>
  <td>{item.provincia}</td>
  <td>{item.partido}</td>
  <td>{item.porcentaje}</td>
  <td>{item.votos}</td>
</tr>

))}
        </tbody>
      </table>
      </div>
    )
}

/*const tabla = document.querySelector('#lista-usuarios tbody');

function cargarUsuarios(){
    fetch('resultados.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.provincia}</td>
                    <td>${usuario.partido}</td>
                    <td>${usuario.votos}</td>
                    <td>${usuario.porcentaje}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarUsuarios();*/