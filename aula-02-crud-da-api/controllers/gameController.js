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
//Função que irá tratar a requisição para CADASTRAR os jogos
const createGame = async (req, res) =>{
    try{
        //const tittle = req.body.title
        //Coletando dados enviados dos formulários, da requisição da insomnia, etc, gravando nas vairáveis
        const {title, year, platform, price} = req.body;
        //Enviando dados para o Service cadastrar 
        await gameService.Create(title, year, platform, price);
        res.status(201).json({ message: "Jogo cadastrado com sucesso!"})
        //cod. 201 (CREATED)-> Recurso criado com sucesso no servidor
    }catch (error){
        console.log(error);
        res.status(500).json ({error: "Erro interno do servidor."});
    }
}

//Exportando as funções
export default {getAllGames, createGame}