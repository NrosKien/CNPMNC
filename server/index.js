const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const mssql = require('mssql');

//Tools for Data from Login
const cors = require('cors');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
//

// Fixed start for Admin
const adminRoute = require("./routes/AdminRoute");
app.use("/admin", adminRoute);
// Fixed start for Partner
const partnerRoute = require("./routes/PartnerRoute");
app.use("/partner", partnerRoute);
// Fixed start for Customer
const customerRoute = require("./routes/CustomerRoute");
app.use("/customer", customerRoute);


//Get Data from Login
/*
app.get ('/',(req,res,next)=>{
    const {email} = req.query;
    const accounts =[
        {
            name: 'nrostrungkien',
            email: 'nrostrungkien3779@gmail.com',
            age: 20
        },
        {
            name: 'user',
            email: 'user@gmail.com',
            age: 18
        }
    ];
    const account = accounts.find(i => i.email ==email)
    if(!account>0) 
    return res.status(404).json({message: 'User is not exsist'});
    return res.status(200).send({account});
})
/*

//Post Data from Login
/*
app.post('/',(req,res,next) =>{
   console.log(`req.body`,req.body);
    res.status(201).json({message: 'Sign in Success'});
})
*/
//

app.listen(PORT, (req, res) => {
    console.log("Running at " + PORT);
})
app.get("/",(req,res)=>{
    res.send("Hello world!");
})