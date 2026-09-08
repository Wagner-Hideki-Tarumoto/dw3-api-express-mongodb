// importar o Express
import express from "express";
//importar o Mongoose
import mongoose from "mongoose";
//importar o Model de Game
import Game from "./models/Games.js";
//importar o Model de Usuário
import User from "./models/Users.js";
//importar as rotas (endpoints)
import gameRoutes from "./routes/gameRoutes.js";

import userRoutes from "./routes/userRoutes.js";

//carregando Express
const app = express();
//configuracoes do Express
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Carregando as rotas de games
app.use('/', gameRoutes)

// Carregando as rotas de usuário
app.use('/', userRoutes)

//iniciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apithegames_aninhado")

//Iniciando o servidor da API
const port = process.env.PORT || 8080;
app.listen(port,(error) =>{
    if (error){
        console.log("Ocorreu um erro ao iniciar a API!" + erro)

    }else{
        console.log("API iniciando com sucesso na porta" + port);
    }
});

export default User;