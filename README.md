#Usando React - Node - Express - Mysql

##Cómo usar? 

1.- Debes instalar los paquetes de node, npm install o yarn.<br>
2.- Debes modificar crear la base de datos acorde al proyecto es decir: id, name, city.<br>
3.- Debes configurar la base de datos en src/server/index.js (line 19 to 24)<br>
4.- en caso que usen mysql en su computadora local, dejé un archivo que se llama datos.sql<br>
5.- después de tener todo listo pueden ejecutarlo con npm run build o node src/server/index.js<br>

## Consumiendo APIS
Como creamos las apis tenemos un mini crud, donde si hicieron la conexión correcta con la base de datos pueden acceder así.

Obtener todos los clientes: http://localhost:3050/clientes <br>
Obtener clientes por id: http://localhost:3050/clientes/id <br>
Añadiendo un nuevo cliente(hay que pasar name y city como json): http://localhost:3050/add <br>
Actualizando un cliente(hay que pasar name y city como json):  http://localhost:3050/update/id <br>
Eliminando un cliente: http://localhost:3050/delete/id <br>




