import express, { urlencoded } from "express";
import cors from "cors"
import { config } from "dotenv";
import {openAi} from "./openAi.js"
config()
const app = express()

app.use(express.json())
app.use(cors())

app.get("/get-text",async(req,res)=>{
   try{ const query = req.query.prompt
    if(query){
        console.log("Get text" + query)
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
app.get("/get-img",async(req,res)=>{
   try{ const query = req.query.prompt
    if(query){
        console.log("Get Img "+query)
        const  response  = await openAi.generateImage(query);
        res.json(response.data)
        return ;
    }else{
        return;
    }}catch(err){
        console.log(err);
        res.sendStatus(400)
    }
})

app.listen(3001 , ()=>{
    console.log("At port 3000");
})
