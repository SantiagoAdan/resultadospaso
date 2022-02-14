const tabla = document.querySelector('#lista-usuarios tbody');

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

cargarUsuarios();