import express, { urlencoded } from "express";
import { config } from "dotenv";
import {openAi} from "./openAi.js"
config()
const app = express()

app.use(express.json())

app.get("/get",async(req,res)=>{
   try{ const query = req.query.prompt
    if(query){
        const  response  = await openAi.generateText(query);
        res.json(response.data)
        return ;
    }else{
        return;
    }}catch(err){
        console.log(err);
        res.sendStatus(400)
    }
})

app.listen(3000 , ()=>{
    console.log("At port 3000");
})
