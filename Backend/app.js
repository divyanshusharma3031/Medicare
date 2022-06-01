const express=require("express");

const app=express();

<<<<<<< HEAD
const disease=require("../Frontend/src/components/symptoms");
=======
const disease=require("./utils/disease");
>>>>>>> upstream/main

const parser=require("body-parser");

app.use(express.json());

<<<<<<< HEAD
const cors=require("cors");

app.use(cors())
=======
const fetch=require("node-fetch");

>>>>>>> upstream/main
app.post('/getdisease',async (req,res)=>{
    let symptom=req.body.symptom;
    for(let i=0;i<disease.length;i++)
    {
        console.log(disease[i]);
        if(disease[i].symptom===symptom)
        {
<<<<<<< HEAD
            return res.status(200).send({dis:disease[i].disease});
=======
            return res.status(200).send(disease[i].disease);
>>>>>>> upstream/main
        }
    }
    res.status(404).send("Disease Not Out");
})
app.get('/',async (req,res)=>{
    console.log(data);
    res.status(200).send("Working fine");
})
<<<<<<< HEAD
app.listen(4000 ,(req,res)=>
=======
app.listen(3000 ,(req,res)=>
>>>>>>> upstream/main
{
    console.log("Server running");
})