<h1>Segundo Entregable SkillFactory by Avalith</h1>
 
<h3> Tecnologias utilizadas:<h3>
<ul>
  <li>NodeJS</li>
  <li>Express</li>
  <li>Sequelize ORM</li>
  <li>Postgres SQL</li>
  <li>Postman</li>
  <li>JWT</li>
</ul>

<h3>Endpoints</h3>
<b>Permisos mínimos - Metodo - Ruta : Descripción.</b>
<br />
<br />
<h4>Users</h4>
<ul>
  <li>ADMIN - GET - <b>/api/users/</b> : Obtener todos los usuarios.</li>
  <li>USUARIO - POST - <b>/api/users/register</b> : Registrar un usuario.</li>
  <li>USUARIO - POST - <b>/api/users/login</b> : Autenticarse con un usuario.</li>
  <li>ADMIN - GET - <b>/api/users/:id</b> : Obtener un usuario por id.</li>
  <li>ADMIN - PUT - <b>/api/users/:id</b> : Editar un usuario.</li>
  <li>ADMIN - DELETE - <b>/api/users/:id</b> : Eliminar un usuario.</li>
</ul>
<br />
<br />
<h4>Cars</h4>
<ul>
  <li>USUARIO - GET - <b>/api/cars/</b> : Obtener todos los autos.</li>
  <li>ADMIN - POST - <b>/api/cars/</b> : Crear un auto.</li>
  <li>USUARIO - PUT - <b>/api/cars/:id</b> : Editar un auto.</li>
  <li>USUARIO - GET - <b>/api/cars/:id</b> : Obtener un auto por id.</li>
  <li>USUARIO - PUT - <b>/api/cars/buy/:id</b> : Adquirir un auto por id, para el usuario logeado.</li>
  <li>ADMIN - DELETE - <b>/api/cars/:id</b> : Eliminar un auto.</li>
</ul>
<br />
<br />
<h3> Credenciales de administrador </h3>
<b>
 email: admin@concesionaria.com
 password: el password que se asigno en el .env
</b>
<br />
<br />
<h3>Instrucciones para correr </h3>
<ol>
  <li>Clonar</li>
  <li>Ejecutar: "npm install"</li>
  <li>Crear archivo .env completando las variables de entorno con las propias, basandose en el .env-example</li>
  <li>Ejecutar "npm run build". Esto va a correr las migraciones y el seed correspondiente al usuario admin.</li>
  <li>Ejecutar "npm start".</li>
</ol>


