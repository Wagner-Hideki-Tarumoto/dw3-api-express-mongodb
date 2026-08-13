//Controller de games
//O controller trtará as requisiçoes do cliente
//importando o service
import gameService from "../services/gameService.js";

//Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({games : games})
        //cod. 200 ok - Requisição feita com sucesso
    }catch (error){
        console.log(error)
        //tratando a resposta qeu api irá enviar em caso de erro
        res.satatus(500).json({error: 'Ocorreu um erro interno do servidor'})
    }
}
//Exportando as funções
export default {getAllGames}