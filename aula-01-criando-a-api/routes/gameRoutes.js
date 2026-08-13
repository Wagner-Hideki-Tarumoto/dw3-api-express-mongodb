//Endpoint (rotas) de Games
import express from 'express';
const gameRoutes = express.Router();
//importando o controller
import gameController from '../controllers/gameController.js';

//Endpoint (rota) para listar  todos os jogos
gameRoutes.get("/games", gameController.getAllGames)

export default gameRoutes;