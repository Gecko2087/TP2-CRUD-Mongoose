// Importar la librería Mongoose para interactuar con MongoDB
const mongoose = require("mongoose");

// Conexión a la base de datos MongoDB usando Mongoose
mongoose
  .connect(
    "mongodb+srv://Grupo-14:grupo14@cursadanodejs.ls9ii.mongodb.net/Node-js"
  )
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

// Definición del esquema para la colección de superhéroes
const superheroSchema = new mongoose.Schema(
  {
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: "Desconocido" },
    debilidad: [String],
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String, default: "Lucas Nieto" },
  },
  { collection: "Grupo-14" } // Especifica explícitamente la colección
);

// Crear el modelo SuperHero basado en el esquema definido
const SuperHero = mongoose.model("SuperHero", superheroSchema);

// Función para insertar un nuevo superhéroe en la base de datos
async function insertSuperHero() {
  try {
    const hero = new SuperHero({
        nombreSuperHeroe: "Flash",
        nombreReal: "Barry Allen",
        edad: 30,
        planetaOrigen: "Tierra",
        debilidad: ["Frío extremo"],
        poderes: ["Super velocidad", "Viajar en el tiempo", "Reflejos mejorados", "Regeneración rápida"],
        aliados: ["Green Lantern", "Wonder Woman", "Batman"],
        enemigos: ["Reverse-Flash", "Captain Cold", "Gorilla Grodd"],
      });      

    // Guardar el superhéroe en la base de datos
    await hero.save();
    console.log("Superhéroe insertado con éxito:", hero);
  } catch (error) {
    console.error("Error al insertar superhéroe:", error);
  }
}

// Función para actualizar la edad de un superhéroe basado en su nombre
async function updateSuperHero(nombreSuperHeroe) {
  try {
    const result = await SuperHero.updateOne(
      { nombreSuperHeroe: nombreSuperHeroe }, // Criterio de búsqueda
      { $set: { edad: 26 } }                 // Actualización: establecer edad a 26
    );
    console.log("Resultado de la actualización:", result);
  } catch (error) {
    console.error("Error al actualizar superhéroe:", error);
  }
}

// Función para eliminar un superhéroe basado en su nombre
async function deleteSuperHero(nombreSuperHeroe) {
  try {
    const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
    console.log("Superhéroe eliminado:", result);
  } catch (error) {
    console.error("Error al eliminar superhéroe:", error);
  }
}

// Función para buscar todos los superhéroes cuyo planeta de origen sea "Tierra"
async function findSuperHeroes() {
  try {
    const heroes = await SuperHero.find({ planetaOrigen: "Tierra" });
    console.log("Superhéroes encontrados:", heroes);
  } catch (error) {
    console.error("Error al buscar superhéroes:", error);
  }
}

// Llamadas de prueba a las funciones
(async () => {
  await insertSuperHero("Flash");          // Inserta un nuevo superhéroe
  await updateSuperHero("");    // Actualiza la edad del superhéroe
  await findSuperHeroes("Goku");          // Busca superhéroes con planeta de origen "Tierra"
  await deleteSuperHero("Spiderman");    // Elimina al superhéroe por su nombre
})();
