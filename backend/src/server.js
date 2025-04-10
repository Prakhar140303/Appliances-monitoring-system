import express from 'express'
import dontenv from 'dotenv'
import mongoose from 'mongoose';

dontenv.config();
import applianceRoutes from './routes/applianceRoutes.js'
import readingRoutes from './routes/readingRoutes.js'

mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log('Connected to the database successfully'))
        .catch(err => console.log('Error connecting to the database'));

const app = express();
app.use(express.json());
const PORT =  process.env.PORT||4000;

app.get('/',(req,res)=>{
    res.status(200).json({
        messsage: "server is working perfectly"
    })
})
app.use('/api/appliances',applianceRoutes);
app.get('/api/readings',readingRoutes);
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})