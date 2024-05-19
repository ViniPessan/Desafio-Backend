import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import router from './routes/enterpriseRoutes'; 

const app = express();

// use o cors antes de qualquer outra coisa
app.use(cors({
    origin: 'http://localhost:3000' // substitua por seu domínio
}));

app.use(bodyParser.json());

app.use('/', router); 

export default app;
