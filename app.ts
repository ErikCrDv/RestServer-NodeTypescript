import dotenv from 'dotenv';
import Server from './models/server';

// Enviroment Variables
dotenv.config();

//
const server = new Server();
server.listen();