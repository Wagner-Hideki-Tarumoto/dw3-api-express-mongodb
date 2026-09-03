//middlewaare de autenticação
import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// função que ira verificar se ousuario possui umtokem valido
const Authorization = (req, res, next) => {
    //Capturando o token da requisição
    const authToken = req.headers['authorization']
    //Se o token não for vazio
    if (authToken != undefined) {
        const bearer = authToken.split(' ');
        //capiturado somente o token
        const token = bearer[1];
        //Validado o token com JWT
        jwt.verify(token, userController.JWTSecret,(error, data) => {
            //Se o token for invalido
            if (error) {
                res.status(401).json({error: "Token invalido"});
                //cod. 401 (UNAUTHORIZED)
                //se o token for válido
            }else {
                req.token = token;
                req.loggedUser = {
                    id: data.id,
                    email: data.email,

                };
                //Permite prosseguir com a requisição
                next();
            }
        });
        //Se o token estiver vazio

    }else {
        res.status(401).json({error: "Token não informado."});
    }
};
export default {Authorization};