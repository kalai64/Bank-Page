import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import controller from './controller/ctr.js'

dotenv.config();

const app = express()
// middleware
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_DB)
        .then(()=> console.log(`Mongoose Connected`))
        .catch(err=> console.log(err))

app.post('/create',controller.Create)
app.get('/getusers',controller.getUsers)
app.delete('/deleteuser/:id',controller.Delete)

app.listen(PORT, ()=> console.log(`App running on ${PORT}`))
