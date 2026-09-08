//userController.js
//Configurando as variaveis de ambiente
import dotenv from "dotenv";
dotenv.config();
import { Code } from "mongodb";
import userService from "../services/userService.js"
//importando o JSONWEBTOKEN
import jwt from 'jsonwebtoken';
//Importando o bcrypt
import bcrypt from "bcrypt";
//Criando um segredo para o TOKEN 
const JWTSecret = process.env.JWTSECRET;

//FUNÇÃO PARA CADASTRAR O USUÁRIO
const createUser = async (req, res) =>{
    try{
        const {email, password} = req.body;
        //gerando o HASH DE SENHA
        const salt = bcrypt.genSaltSync(10); // O sal incrementa o hash
        const hash = bcrypt.hashSync(password, salt)
        // CADASTRANDO O USUÁRIO COM EMAIL E HASH DE SENHA
        await userService.Create(email, hash);
        res.status(201).json({message: "USUARIO CADASTRO COM SUCESSO!"});
        //cod. 201: CREATED
    }catch (error) {
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor.'})
    }
}

//FUNÇÃO PARA LOGAR UM USUÁRIO
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        //Validar o email enviado
        if (email != undefined) {
            //Buscando o usuário pelo e-mail
        const user = await userService.getOne (email)
        //Verificando se o usuário existe
        if (user != undefined) {
            //Verificando se a senha esta correto
            //comparando o hash de senha
            const correct = bcrypt.compareSync(password, user.password);
            //verificando se a senha é valida
            if (correct) {
                //Se a senha estiver correta , gera o TOKEN
                jwt.sign({id: user._id, email: user.email}, JWTSecret, {expiresIn: '48h'},(error, token) => {
                        //Tratando o erro durante a geração do token
                        if (error) {
                            res.status(400).json({error: "Não foi possível gerar o token de autenticação."});
                            //Caso sucesso
                        }else {
                            res.status(200).json({token});
                        }
                    });
                //Caso SENHA INCORRETA
            }else {
                res.status(401).json({error: "Credenciais invalidas. Tente novamente!"});
                    //cod. 401  (Unauthorized) - Não autorizado
            }
            //Caso USUÁRIO NÃO ENCONTRADO
        } else {
            res.status(404).json({error: "O usuário informado não existe"});
            //Code.404 (NOT FUND)
        }
        
        //Caso e-mail não preenchido
        } else {
            res.status(400).json({error: "O Email é invalido."})
        }
        
    }catch (error){
        console.log(error)
        res.status(500).json({error: 'Erro interno do servidor.'})
    }
}
export default {createUser, loginUser, JWTSecret}