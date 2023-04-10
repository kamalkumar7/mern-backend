import express from 'express'
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js'
import cors from 'cors'
const app = express();

dotenv.config();


app.use(express.json());
app.use(cors());
app.listen(800,()=>{
    console.log("server started");    
})
app.use('/auth',authRoutes);

const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("Connected to DB");
 
      })
      .catch((err) => {
        throw err;
      });
    };

    connect();
  








