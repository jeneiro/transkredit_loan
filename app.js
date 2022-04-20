const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
require("dotenv").config();
app.use(express.json()) 
const db = require('./models')

db.sequelize.sync().then((req)=>{
    app.listen(4000,()=>{
        console.log("Server Started")
    })
}
  
)

app.use("/user", require("./routers/userRouter"));
app.use("/auth", require("./routers/authRouter"));





