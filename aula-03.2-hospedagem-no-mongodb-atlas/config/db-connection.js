//Importando o mongoopse
import mongoose from "mongoose";
//Usuario e senha do banco de dados
const dbUser = "wtarumoto_db_user"
const dbPassword = "Wagner123";
const connect = () =>{
    mongoose.connect(
         `mongodb+srv://${dbUser}:${dbPassword}@cluster0.7y6miyt.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`

        );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () =>{
        console.log("Conectando o mongoDB com sucesso!");
    });
};
connect();
export default mongoose;