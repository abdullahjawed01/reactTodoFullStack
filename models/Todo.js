import mongoose from "mongoose";

let todoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
        
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})

let todoModel =  mongoose.model("todo",todoSchema)

export default todoModel