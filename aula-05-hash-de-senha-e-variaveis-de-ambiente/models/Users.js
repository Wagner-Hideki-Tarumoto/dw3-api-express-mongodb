import mongoose from "mongoose";

//CriandoSchema de Usuário
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

//Iniciando Model
const User = mongoose.model("User", userSchema);

export default User;