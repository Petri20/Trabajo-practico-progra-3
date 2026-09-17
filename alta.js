const URL = "https://api-autos-tgwd.onrender.com/autos";

const formAlta = document.getElementById("formAlta");
const mensaje = document.getElementById("mensaje");

formAlta.addEventListener("submit", agregarAuto);

function agregarAuto(evento) {

    evento.preventDefault();

    const id = document.getElementById("id").value;
    const marca = document.getElementById("marca").value;
    const precio = document.getElementById("precio").value;
    const color = document.getElementById("color").value;

    let auto = {
        marca,
        precio: Number(precio),
        color
    };

    // Si el usuario cargó un ID, se agrega al objeto
    if (id !== "") {
        auto.id = Number(id);
    }

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(auto)
    })
    .then(respuesta => respuesta.json())
    .then(datos => {

        if (datos.mensaje && datos.mensaje.includes("existe")) {

            mensaje.textContent = "❌ Ya existe un automóvil con ese ID.";
            return;
        }

        mensaje.textContent = "✅ Automóvil agregado correctamente.";

        console.log(datos);

        formAlta.reset();
    })
    .catch(error => {

        console.error(error);

        mensaje.textContent =
            "❌ Error al conectar con la API.";
    });

}