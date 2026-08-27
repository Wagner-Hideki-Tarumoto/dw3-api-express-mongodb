//Importando o model
import User from "../models/Users.js"

class userService{
    async Create(email, password) {
        try{
            const newUser = new User({
            //email: email,
           // password: password
           email,
           password 
        });
        await newUser.save();
    }catch (error){
        console.log(error);
    }
}
//METODO PARA LISTAR UM USUÁRIO
async getOne(email){
    try {
        const user = await User.findOne({ email: email})
        return user
    }catch (error){
        console.log(error)
    }
}
}
export default new userService()