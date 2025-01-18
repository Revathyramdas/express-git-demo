const express=require('express')
const app=express();


app.get('/git-demo',(req,res)=>{
    return res.status(200).json({message:"git demo"})
})

app.get('/dev',(req,res)=>{
    return res.status(200).json({message:'Created at dev branch'})
})
app.get('/git-hub',(req,res)=>{
    return res.status(200).json({message:'GIT-HUB CHANGES'})
})


app.listen(6000,()=>{
    console.log("App is Running @localhost://6000");
    
})