import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import router from './routes/enterpriseRoutes'; 

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' 
}));

app.use(bodyParser.json());

app.use('/', router); 

export default app;
