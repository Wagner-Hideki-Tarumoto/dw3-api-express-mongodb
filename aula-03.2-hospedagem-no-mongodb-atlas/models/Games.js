//MODEL DE GAMES
//Importando o mongoose
import mongoose from "mongoose";

//schema para documento aninhado (description)
const descriptionSchema = mongoose.Schema({
    genre: String,
    platform: String,
    rating: String
})

//Criando o Schema de games
const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions: descriptionSchema
})


const Game = mongoose.model('Game', gameSchema)

export default Game;
