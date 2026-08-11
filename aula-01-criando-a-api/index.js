// importar o Express
import express from "express";
//carregando Express
const app = express();

//configuracoes do Express
app.use(express.json());

//ROTA PRINCIPAL DA API
app.get("/", (req, res) =>{
// JSON que será retornado pela API
const games = [
	{
		title: "Fifa 2019",		
		year: 2019,
		plataform: "X-box 360",
		price: 198
	},
	{
		title: "The Sins",		
		year: 2016,
		plataform: "PC (windows)",
		price: 149
	},
	{
		title: "CS GO",		
		year: 2012,
		plataform: "PC (windows)",
		price: 89
	}
]	

//Configurando o retorno da API
res.status(200).json(games)
});	

//Iniciando o servidor da API
const port = 4000;
app.listen(port,(error) =>{
    if (error){
        console.log("Ocorreu um erro ao iniciar a API!" + erro)

    }else{
        console.log("API iniciando com sucesso na porta" + port);
    }
});