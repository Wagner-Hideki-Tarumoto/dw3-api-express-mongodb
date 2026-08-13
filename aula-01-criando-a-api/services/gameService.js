//Serviços de Games
//Aqui será inserido os métidos para Ler, Cadastrar, Alterar e Excluir games
//Importanto o Model
import Game from "../models/Games.js"

class gameService {
//serviços paraler os jogos
async getAll() {
    //tentativa da promessa
    try{
    //o método .find() do mongoose busca registros
    const games = await Game.find()
    return games
    //caso ocorra um erro será executado o catch
     } catch (erro){
        console.log(erro)

     }
}

}

//Exportando a classe
export default new gameService()