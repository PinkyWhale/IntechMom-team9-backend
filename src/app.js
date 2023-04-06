//Import de packetes
import express from "express";
import mongoose from "mongoose";

//se importan los 2 entornos
import { puerto } from "./config/index.js";
import { uri } from "./config/index.js"

//levanta express
const app = express();

//se solicita a express que nos responda que esta vivo
app.get('/', (request, response, error ) => {
  response.send('API levantada!');
});

//mongoose se conecta al cluster, luego avisa que conecto... sino agarra el error y lo muestra en consola
mongoose.connect(uri)
.then(()=> console.log("Conectado a MongoDB Atlas - Cluster Remoto :) "))
.catch((error)=>console.error(error));

//se le avisa al dev cual es el puerto de escucha en su pc
app.listen(puerto, () => {
  console.log(`Escuchando en el puerto local: ${puerto}`);
});
