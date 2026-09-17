const URL = "https://api-autos-tgwd.onrender.com/autos";

// CONSULTA GENERAL
const btnConsultarTodos = document.getElementById("btnConsultarTodos");
const tablaAutos = document.getElementById("tablaAutos");

btnConsultarTodos.addEventListener("click", obtenerAutos);

function obtenerAutos() {
    fetch(URL)
        .then(respuesta => respuesta.json())
        .then(datos => {

            tablaAutos.innerHTML = "";

            datos.forEach(auto => {

                tablaAutos.innerHTML += `
                    <tr>
                        <td>${auto.id}</td>
                        <td>${auto.marca}</td>
                        <td>${auto.precio}</td>
                        <td>${auto.color}</td>
                    </tr>
                `;

            });

        })
        .catch(error => console.error(error));
}

// CONSULTA POR ID
const formConsulta = document.getElementById("formConsulta");
const resultadoConsulta = document.getElementById("resultadoConsulta");

formConsulta.addEventListener("submit", buscarAuto);

function buscarAuto(evento) {

    evento.preventDefault();

    const id = document.getElementById("idAuto").value;

    fetch(`${URL}/${id}`)
        .then(respuesta => respuesta.json())
        .then(auto => {

            if (auto.mensaje) {

                resultadoConsulta.innerHTML = `
                    <p>${auto.mensaje}</p>
                `;

                return;
            }

            resultadoConsulta.innerHTML = `
                <h3>Automóvil encontrado</h3>

                <p><strong>ID:</strong> ${auto.id}</p>
                <p><strong>Marca:</strong> ${auto.marca}</p>
                <p><strong>Precio:</strong> ${auto.precio}</p>
                <p><strong>Color:</strong> ${auto.color}</p>
            `;

        })
        .catch(error => console.error(error));
}
