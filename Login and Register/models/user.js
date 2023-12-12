import mongoose from "mongoose";

// defining schema

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email:{type: String , required: true, trime: true,unique: true},
    password:{type:String, required: true, trime: true},
    join:{ type: Date, default:Date.now}
})

// Model

const usermodel = mongoose.model('Login',userSchema)

export default usermodel