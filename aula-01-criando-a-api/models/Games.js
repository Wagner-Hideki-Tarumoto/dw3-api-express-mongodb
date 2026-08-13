//MODEL DE GAMES
//Importando o mongoose
import mongoose from "mongoose";

//criando o schema de Games
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    plataform: String,
    price: Number
})

const Game = mongoose.model('Game', gameSchema)
    
export default Game;
    