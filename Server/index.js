// const express=require("express")
// const mongoose=require("mongoose")
// const cors=require("cors")

// const app=express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mangodb://127.0.0.1:27017/employee");
// app.listen(3001,()=>{
//     console.log("server is running")
// })

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel=require('./model')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("the password incorrect")
            }
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))

})

app.listen(3001, () => {
    console.log("server is running");
});
