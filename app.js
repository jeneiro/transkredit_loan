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
app.use("/bank", require("./routers/bankRouter"));
app.use("/corporate", require("./routers/corporateRouter"));
app.use("/director", require("./routers/directorRouter"));
app.use("/existing-loan", require("./routers/existingLoanRouter"));
app.use("/individual", require("./routers/individualRouter"));
app.use("/joint-individual", require("./routers/jointIndividualRouter"));
app.use("/joint-nextofkin", require("./routers/jointNextOfKinRouter"));
app.use("/loan", require("./routers/loanRouter"));
app.use("/nextofkin",require("./routers/nextOfKinRouter"))
app.use("/passport", require("./routers/passportRouter"))





