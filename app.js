const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({extended: true,limit:'1mb', parameterLimit:1000}));
require("dotenv").config();
app.use(express.json({limit:"1mb"})) 
const db = require('./models')

db.sequelize.sync().then((req)=>{
    app.listen(4000,()=>{
        console.log("Server Started")
    })
}
  
)
app.use(express.static(__dirname + '/documents'));
app.use('/documents', express.static('documents'));

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
app.use("/register", require("./routers/registerRouter"));
app.use("/work-detail",require("./routers/workDetailRouter"))
app.use("/bank-detail",require("./routers/bankRouter"));
app.use("/corporative",require("./routers/corporativeRouter"));
app.use("/joinRequest",require("./routers/joinRequestRouter"));
app.use("/staff", require("./routers/staffRouter"));
app.use("/admin", require("./routers/adminRouter"))
app.use("/documents", require("./routers/documentRouter"))




