require('dotenv').config();
const mongoose = require("mongoose");
const connectDatabase = ()=>{
    const dbUrl=process.env.DB_URL;
    mongoose
    .connect(dbUrl)
    .then((data)=>{
        console.log(`MongoDB connected with server: ${data.connection.host}`)
    })
    .catch((err)=>{
        console.log(`Database connectio failed: ${err.message}`)
        process.exit(1)
    })
}

module.exports = connectDatabase;