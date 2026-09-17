# API Autos - Cliente Web

## Descripción

Aplicación web desarrollada en HTML, CSS y JavaScript para interactuar con una API REST de automóviles.

Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos de automóviles utilizando solicitudes HTTP.

La aplicación fue desarrollada como trabajo práctico de Programación III.

---

## Tecnologías utilizadas

### Backend

- API REST
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API

### Herramientas

- Postman
- Visual Studio Code
- Git y GitHub

---

## Funcionalidades

### Consulta de automóviles

- Consulta de todos los automóviles.
- Visualización en tabla.
- Consulta individual por ID.

### Alta de automóviles

- Alta con ID manual.
- Alta con ID automático.
- Validaciones de formularios.

### Modificación

- Búsqueda de automóvil por ID.
- Visualización de los datos.
- Modificación de marca, precio y color.

### Eliminación

- Búsqueda por ID.
- Confirmación de eliminación.
- Eliminación de automóviles.

### Validaciones

- Marca obligatoria.
- Precio obligatorio.
- Precio mayor que cero.
- Color obligatorio.
- ID opcional.
- Validación de ID positivo cuando se informa.

---

## Estructura del proyecto

```text
API-Autos
│
├── index.html
├── consulta.html
├── alta.html
├── modificar.html
├── eliminar.html
│
├── css
│   └── estilos.css
│
├── js
│   ├── consulta.js
│   ├── alta.js
│   ├── modificar.js
│   └── eliminar.js
│
└── README.md
```

---

## API utilizada

URL base:

```text
https://api-autos-tgwd.onrender.com
```

Endpoints principales:

| Método | Endpoint | Descripción |
|----------|----------|----------|
| GET | /autos | Obtener todos los automóviles |
| GET | /autos/:id | Obtener un automóvil |
| POST | /autos | Agregar un automóvil |
| PUT | /autos/:id | Modificar un automóvil |
| DELETE | /autos/:id | Eliminar un automóvil |

---

## Ejemplos de uso

### Obtener todos los automóviles

```http
GET /autos
```

### Obtener un automóvil

```http
GET /autos/100
```

### Agregar un automóvil

```http
POST /autos
```

```json
{
  "marca": "Ford",
  "precio": 45000,
  "color": "#00AA00"
}
```

### Modificar un automóvil

```http
PUT /autos/100
```

```json
{
  "marca": "Ford",
  "precio": 50000,
  "color": "#FF0000"
}
```

### Eliminar un automóvil

```http
DELETE /autos/100
```

---

## Pruebas realizadas

Mediante Postman se verificaron las siguientes operaciones:

- Obtener todos los automóviles.
- Obtener automóvil por ID.
- Alta con ID manual.
- Alta con ID automático.
- Validación de ID duplicado.
- Modificación de registros.
- Eliminación de registros.
- Manejo de errores.

---

## Autor

Valentín Petri

Programación III

Trabajo Práctico: API REST de Autos y Cliente Web
