import React, { useEffect, useState } from "react"

function usePostres() {

	const [resultados, setPostres] = useState([])

	useEffect(() => {
		fetch("json/resultados.json")
		.then(response => response.json())
		.then(datos => {
			setPostres(datos)
		})
	}, [])

	return resultados
}

export default function Postres() {

	const resultados = usePostres()

	return (

		<div className="container mt-5" align="center">
      
	      <h4>PARTIDOS GANADORES POR PROVINCIA</h4>
	        
	      <div className="row">

	        <div className="col-md-12">

	          <table className="table table-bordered">
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

	            {resultados.map(item => (

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

	)

}
