const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4040;
require('./src/db/conn');


app.use(express.json());
app.use(cors());

const userRouter = require('./src/router/user.router')
app.use("/user",userRouter)


app.listen(PORT,()=>{
    console.log(`sever is running ${PORT}`);
})