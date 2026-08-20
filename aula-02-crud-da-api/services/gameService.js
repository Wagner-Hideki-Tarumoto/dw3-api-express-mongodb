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
   //MÉTODO PARA EXCLUIR UM JOGO
   async Delete(id){
      try {
         await Game.findByIdAndDelete(id);
      // O método findByIdAndDelete() do mongoose busca um registro pela ID e deleta
      console.log ('O jogo com a id ${id} foi deletado.')
      }catch(error){
      console.log(Error)
      }
   }
//METODO PARA ALTERAR UM JOGO
async Update(id, title, year, platform, price){
   try {
      await Game.findByIdAndUpdate(id, {
         title,
         year,
         platform, 
         price
      })
      console.log('O jogo com a Id ${id} foi alterado.')
   }catch (error) {
      console.log(error)
   }
}

//ENCERRA A CLASSE 
}

//Exportando a classe
export default new gameService()