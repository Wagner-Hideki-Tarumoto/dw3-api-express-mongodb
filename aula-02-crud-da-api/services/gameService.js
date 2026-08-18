//Serviços de Games
//Aqui será inserido os métidos para Ler, Cadastrar, Alterar e Excluir games
//Importanto o Model
import Game from "../models/Games.js"

class gameService {
   //serviços/METODO para ler os jogos
   async getAll() {
      //tentativa da promessa
      try {
         //o método .find() do mongoose busca registros
         const games = await Game.find()
         return games
         //caso ocorra um erro será executado o catch
      } catch (erro) {
         console.log(erro)

      }
   }
   //METODO PARA CADASTAR JOGOS
   async Create(title, year, platform, price) {
      try {
         //Enviando os dados a serem cadastrados para o Model
         const newGame = new Game({
            //title: title,
            title,
            year,
            platform,
            price
         });
         //aguardar a operação de  cadastro
         await newGame.save(); // .save() é o métido do mogoose para cadastrar
      } catch (error) {
         console.log(error);
      }
   }


}

//Exportando a classe
export default new gameService()