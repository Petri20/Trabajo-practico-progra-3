const URL = "https://api-autos-tgwd.onrender.com/autos";

const formBuscar = document.getElementById("formBuscar");
const formModificar = document.getElementById("formModificar");
const mensaje = document.getElementById("mensaje");

// BUSCAR AUTOMÓVIL
formBuscar.addEventListener("submit", buscarAuto);

function buscarAuto(evento) {

    evento.preventDefault();

    const id = document.getElementById("idBusqueda").value;

    fetch(`${URL}/${id}`)
        .then(respuesta => respuesta.json())
        .then(auto => {

            if (auto.mensaje) {

                mensaje.textContent = auto.mensaje;

                formModificar.reset();

                return;
            }

            document.getElementById("id").value = auto.id;
            document.getElementById("marca").value = auto.marca;
            document.getElementById("precio").value = auto.precio;
            document.getElementById("color").value = auto.color;

            mensaje.textContent = "Automóvil encontrado.";
        })
        .catch(error => {
            console.error(error);
            mensaje.textContent = "Error al consultar el automóvil.";
        });
}

// MODIFICAR AUTOMÓVIL
formModificar.addEventListener("submit", modificarAuto);

function modificarAuto(evento) {

    evento.preventDefault();

    const id = document.getElementById("id").value;

    const autoModificado = {
        marca: document.getElementById("marca").value,
        precio: Number(document.getElementById("precio").value),
        color: document.getElementById("color").value
    };

    fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(autoModificado)
    })
        .then(respuesta => respuesta.json())
        .then(datos => {

            if (datos.mensaje) {

                mensaje.textContent = datos.mensaje;
                return;
            }

            mensaje.textContent =
                "✅ Automóvil modificado correctamente.";
        })
        .catch(error => {

            console.error(error);

            mensaje.textContent =
                "❌ Error al modificar el automóvil.";
        });
}