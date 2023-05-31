import express from 'express';
import bodyParser from 'body-parser';
import clientRoute from './routes/Client';
import productRoute from './routes/Product';
import orderRoute from './routes/Order';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/client', clientRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});