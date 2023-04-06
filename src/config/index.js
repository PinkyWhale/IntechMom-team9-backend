//import de packete dotenv
import * as dotenv from 'dotenv';

//configuracion de dotenv
dotenv.config();

//se crean las cosntantes y se exportan a app.js
export const puerto = process.env.PORT;
export const uri = process.env.MONGODB_URI;