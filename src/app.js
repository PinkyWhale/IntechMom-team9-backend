import express from "express";
import { puerto } from "./config/index.js";

const app = express();

app.get('/', (request, response, error ) => {
  response.send('status: OK');
});

app.listen(puerto, () => {
  console.log(`Server listening in port: ${puerto}`);
});
