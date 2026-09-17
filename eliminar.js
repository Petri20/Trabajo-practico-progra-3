const URL = "https://api-autos-tgwd.onrender.com/autos";

const formBuscar = document.getElementById("formBuscar");
const btnEliminar = document.getElementById("btnEliminar");
const mensaje = document.getElementById("mensaje");

let idActual = null;

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

                document.getElementById("id").textContent = "";
                document.getElementById("marca").textContent = "";
                document.getElementById("precio").textContent = "";
                document.getElementById("color").textContent = "";

                idActual = null;

                return;
            }

            idActual = auto.id;

            document.getElementById("id").textContent = auto.id;
            document.getElementById("marca").textContent = auto.marca;
            document.getElementById("precio").textContent = auto.precio;
            document.getElementById("color").textContent = auto.color;

            mensaje.textContent = "Automóvil encontrado.";
        })
        .catch(error => {
            console.error(error);
            mensaje.textContent = "Error al consultar el automóvil.";
        });
}

// ELIMINAR AUTOMÓVIL
btnEliminar.addEventListener("click", eliminarAuto);

function eliminarAuto() {

    if (!idActual) {

        mensaje.textContent =
            "Primero debe buscar un automóvil.";

        return;
    }

    const confirmar = confirm(
        "¿Está seguro de eliminar este automóvil?"
    );

    if (!confirmar) {
        return;
    }

    fetch(`${URL}/${idActual}`, {
        method: "DELETE"
    })
        .then(respuesta => respuesta.json())
        .then(datos => {

            mensaje.textContent =
                "✅ Automóvil eliminado correctamente.";

            console.log(datos);

            document.getElementById("id").textContent = "";
            document.getElementById("marca").textContent = "";
            document.getElementById("precio").textContent = "";
            document.getElementById("color").textContent = "";

            idActual = null;
        })
        .catch(error => {

            console.error(error);

            mensaje.textContent =
                "❌ Error al eliminar el automóvil.";
        });
}