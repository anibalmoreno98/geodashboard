GeoDashboard

Descripción
GeoDashboard es una aplicación web orientada a la visualización de información geoespacial mediante un mapa interactivo. La aplicación está desarrollada con React e integra Leaflet como motor cartográfico.
El sistema obtiene los datos desde un backend mock basado en JSON Server, lo que permite validar flujos de trabajo y comportamientos del frontend sin depender de una API definitiva.
El proyecto está completamente contenerizado con Docker y orquestado mediante Docker Compose, garantizando portabilidad, reproducibilidad y facilidad de despliegue en entornos profesionales.

Objetivo del proyecto
El propósito de GeoDashboard es servir como base técnica para el desarrollo de dashboards GIS, prototipos geoespaciales y aplicaciones que requieran visualización de datos sobre mapas.
La arquitectura está diseñada para ser modular, extensible y alineada con prácticas habituales en entornos corporativos.

Tecnologías utilizadas
React
Leaflet
React-Leaflet
JSON Server
Axios
Docker
Docker Compose

Estructura del proyecto
geodashboard/
│
├── backend/
│   ├── db.json
│   └── Dockerfile
│
├── src/
│   ├── App.js
│   ├── index.js
│   └── index.css
│
├── Dockerfile
├── docker-compose.yml
└── package.json

Arquitectura del sistema
El sistema se compone de dos servicios principales:

Frontend: aplicación React que renderiza el mapa, consume datos geoespaciales y gestiona la interfaz.

Backend mock: servicio JSON Server que expone endpoints REST basados en el contenido de db.json..
Ambos servicios se ejecutan en contenedores independientes y se comunican a través de la red interna generada por Docker Compose.

Ejecución con Docker Compose
Situarse en la carpeta raíz del proyecto.
Construir y ejecutar los servicios:
docker-compose up --build

Servicios disponibles:
Frontend: http://localhost:3000
Backend mock: http://localhost:4000/points

Para detener los servicios:
CTRL + C
docker-compose down

Backend mock
El backend utiliza JSON Server y expone los datos definidos en backend/db.json.
Ejemplo de contenido:

{
"points": [
{ "id": 1, "name": "Punto A", "lat": 28.5, "lng": -13.8 }
]
}

Los endpoints se generan automáticamente.
Ejemplo:
GET http://localhost:4000/points

Añadir nuevos puntos
Editar el archivo backend/db.json:

{
"points": [
{ "id": 1, "name": "Punto A", "lat": 28.5, "lng": -13.8 },
{ "id": 2, "name": "Punto B", "lat": 28.1, "lng": -15.4 }
]
}

Después de modificar los datos, reconstruir:
docker-compose up --build

Funcionalidades principales
Visualización cartográfica interactiva.
Representación de puntos geoespaciales obtenidos dinámicamente desde el backend.
Popups informativos asociados a cada marcador.
Arquitectura modular preparada para ampliaciones futuras.

Comandos útiles
Ejecutar React sin Docker:
npm start

Ejecutar JSON Server sin Docker:
json-server --watch backend/db.json --port 4000

Instalar dependencias:
npm install

Líneas de evolución recomendadas
Integración con APIs geoespaciales reales.
Incorporación de capas adicionales (satélite, híbrido, topográfico).
Implementación de clustering para grandes volúmenes de puntos.
Añadido de paneles de control y filtros avanzados.
Integración con sistemas de autenticación corporativos.

Licencia
Este proyecto se proporciona exclusivamente con fines educativos, de experimentación
y validación técnica. No está destinado a entornos de producción ni a su uso en sistemas
operativos reales. Puede emplearse libremente para aprendizaje, pruebas internas y desarrollo de prototipos.