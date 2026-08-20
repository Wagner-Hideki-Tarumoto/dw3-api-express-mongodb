//Controller de games
//O controller trtará as requisiçoes do cliente
//importando o service
import gameService from "../services/gameService.js";
//importando o ObjectId do mongoDB
import { ObjectId } from "mongodb";
//Função que irá tratar a requisição para LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll()
        res.status(200).json({games : games})
        //cod. 200 ok - Requisição feita com sucesso
    }catch (error){
        console.log(error)
        //tratando a resposta qeu api irá enviar em caso de erro
        res.status(500).json({error: 'Ocorreu um erro interno do servidor'})
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
//Função que trata a requisição para EXCLUIR um jogo
const deleteGame = async (req, res) =>{
    try{
    //Coletando a ID da rota
    const id = req.params.id;
    //Fazendo a validação do ObjectId
        if(ObjectId.isValid(id)) {
            await gamesService.Delete(id);
            res.sendStatus(204);
            //Cod. 204 (NO CONTENTE) : Requisição bem sucedida, porém não há conteúdo para retornar.
        }else{
            res.status(400).json({error: 'Requisição mal formada, ID inválido.'})
            //cod 400 ; BAD REQUEST
        }

    }catch (error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor'})
    }
}//funççao que trata a requisição para ALTERAR um jogo
const updateGame = async (req, res) =>{
    try{
        //coletando ID da rota
        const id = req.params.id
        //Validando o ObjectID
        if (ObjectId.isValid(id)){
            //coletando os dados que serão alterados
            const {title, year, platform, price} =req.body
            //Enviando dados para o service
            await gameService.Update(id, title, year, platform, price);
            res.status(200).json({message: 'jogo atualizado com sucesso.'})
        }
    }catch (error){
        console.log(error)
        res.status(500).json({error: 'Erro interno do servidor.'})
    }

}
//Exportando as funções
export default {getAllGames, createGame, deleteGame, updateGame}