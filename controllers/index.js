import express from "express"
import todoModel from "../models/Todo.js"


let router = express.Router()

router.get("/getall",async(req,res)=>{
    try {
        let todo = await todoModel.find()

        res.status(200).json(todo)

    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.post("/create",async(req,res)=>{
    try {
        let todo = req.body 
        let final = await todoModel.create(todo)
        res.status(201).json(final)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.put("/update/:id",async(req,res)=>{
    try {
        let id = req.params.id 
        let title = req.body 
        await todoModel.findByIdAndUpdate(id,title,{new:true})
        res.status(200).json({msg:"updates successfully"})
    } catch (error) {
         console.log(error);
        res.status(500).json(error)
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try {
        let id = req.params.id 
        let todo = await todoModel.findByIdAndDelete(id)
        res.status(200).json({msg:"todo deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})


router.delete("/deleteall",async(req,res)=>{
    try {
        await todoModel.deleteMany()
        res.status(200).json({msg:"task deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

export default router