// Importamos la aplicación Express desde el archivo server.ts
// Aquí se encuentra la configuración base del servidor.
import server from './server'

// Definimos el puerto en el cual se ejecutará el servidor.
// Primero intentamos leerlo desde una variable de entorno (útil para producción).
// Si no existe, usamos el puerto 4000 como valor por defecto (para desarrollo local).
const port = process.env.PORT || 4000

// Ejecutamos el servidor para que escuche en el puerto definido.
// Cuando el servidor esté corriendo, se imprime un mensaje en la consola para confirmar.
server.listen(port, () => {
    console.log(`REST API is working on ${port} port`)
})