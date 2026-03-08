const express = require("express")
const mongoose = require("mongoose")
const app = express();
const allRoutes = require('./routes/index.route.js');

app.use(express.json());

app.use('/api', allRoutes);

app.listen(5000,()=>{console.log("Server Running on port 5000");
 })

app.get("/",(req,res)=>{
    res.send("Welcome")
});

const connectdb = async () =>{
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/pizzaDelievery");
        console.log("mongodb connected");
        
    } catch (error) {
        console.log("dbconnectionerror=>",error);
        
    }
}
connectdb();