// importar o Express
import express from "express";
//importar o Mongoose
import mongoose from "mongoose";
//importar o Moel
import Game from "./models/Games.js";
//importar as rotas (endpoints)
import gameRoutes from "./routes/gameRoutes.js";

//carregando Express
const app = express();
//configuracoes do Express
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// Carregando as rotas
app.use('/', gameRoutes)

//iniciando a conexão com o MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/apithegames")

//Iniciando o servidor da API
const port = 4000;
app.listen(port,(error) =>{
    if (error){
        console.log("Ocorreu um erro ao iniciar a API!" + erro)

    }else{
        console.log("API iniciando com sucesso na porta" + port);
    }
});