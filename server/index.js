import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import announcementsRoutes from './routes/announcements.js';
import upcommingRoutes from './routes/upcommingroutes.js'


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/announcements', announcementsRoutes);
app.use('/upcomming',upcommingRoutes)

const connection_url = 'mongodb+srv://anywaredashboard:anywaredashboard@cluster0.qdmfqcs.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 4000;  
mongoose.connect(connection_url)
    .then(() => app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));

