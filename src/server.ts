// Importamos el módulo 'express', que nos permite crear un servidor web y definir rutas.
import express from 'express'

// Creamos una instancia de la aplicación Express.
// Esta instancia será la que manejará todas las peticiones HTTP (GET, POST, etc.).
const app = express()

// Exportamos la instancia de Express para poder usarla desde otros archivos (como index.ts).
export default app