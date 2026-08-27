//userRoutes.js
import express from 'express';
const userRoutes = express.Router();
//Importando o controller
import userController from '../controllers/userController.js';

//enpoint para Cdastrar uSUÁRIO
userRoutes.post("/user",userController.createUser);

//Enpoint prar logar rota
userRoutes.post("/login", userController.loginUser);

export default userRoutes;