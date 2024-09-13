import mongoose, { model, Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    bankname:{type:String, required:true},
    createdAt:{type:Date, default:Date.now},
    enabled: {type:Boolean, default:true}
})


const usermodel = mongoose.model('users', userSchema)
export default usermodel;