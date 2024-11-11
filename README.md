
# Gestión de Superhéroes con Node.js y MongoDB - Nodo Tecnológico

Este proyecto es una aplicación que permite gestionar información sobre superhéroes utilizando Node.js y MongoDB. Implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para interactuar con la base de datos.

## Enunciado

1. **Conectarse a la base de datos con Node.js** usando Mongoose.
2. **Crear un esquema y un modelo** para la colección de superhéroes.
3. **Desarrollar métodos CRUD** para:
   - **Insertar** (`insert`).
   - **Actualizar** (`update`).
   - **Eliminar** (`delete`).
   - **Buscar** (`find`).

## Características del Proyecto

- **Conexión a MongoDB**: Utiliza Mongoose para conectarse a una base de datos MongoDB.
- **Modelo estructurado**: Define un esquema para validar y estructurar los datos de los superhéroes.
- **Operaciones CRUD**: Implementa métodos básicos para manejar datos.

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener:

- [Node.js](https://nodejs.org/) instalado en tu sistema.
- Una instancia de MongoDB (puedes usar [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para una base de datos en la nube).

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd <carpeta-del-proyecto>
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Configura el acceso a tu base de datos MongoDB editando la conexión en el archivo `app.js`:
   ```javascript
   mongoose.connect('mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<base-de-datos>')
   ```

## Funcionalidades

### **Esquema de Superhéroes**
El esquema define los campos y validaciones para los documentos en la colección `SuperHero`:

- `nombreSuperHeroe` (String, requerido): Nombre del superhéroe.
- `nombreReal` (String, requerido): Nombre real del superhéroe.
- `edad` (Number, mínimo: 0): Edad del superhéroe.
- `planetaOrigen` (String, valor por defecto: "Desconocido"): Planeta de origen del superhéroe.
- `debilidad` (String): Debilidad del superhéroe.
- `poderes` (Array de Strings): Lista de poderes del superhéroe.
- `aliados` (Array de Strings): Lista de aliados del superhéroe.
- `enemigos` (Array de Strings): Lista de enemigos del superhéroe.
- `createdAt` (Date, valor por defecto: fecha actual): Fecha de creación del documento.
- `createdBy` (String, valor por defecto: "Lucas Nieto"): Autor del documento.

### **Operaciones CRUD**

1. **Insertar un superhéroe**:
   Inserta un nuevo documento en la base de datos.
   ```javascript
   insertSuperHero();
   ```

2. **Actualizar un superhéroe**:
   Modifica la edad de un superhéroe basado en su nombre.
   ```javascript
   updateSuperHero('Spiderman');
   ```

3. **Eliminar un superhéroe**:
   Borra un documento de la base de datos basado en su nombre.
   ```javascript
   deleteSuperHero('Spiderman');
   ```

4. **Buscar superhéroes**:
   Encuentra todos los superhéroes cuyo planeta de origen sea "Tierra".
   ```javascript
   findSuperHeroes();
   ```

### **Ejecución del Proyecto**

1. Ejecuta la aplicación con:
   ```bash
   node app.js
   ```

2. Verifica los resultados de las operaciones en la consola.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Mongoose**: Biblioteca para modelar datos en MongoDB.
- **MongoDB**: Base de datos NoSQL.

## Contribuciones

Si deseas contribuir, puedes enviar un pull request o abrir un issue con tus sugerencias.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
