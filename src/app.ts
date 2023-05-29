import express from 'express';
import bodyParser from 'body-parser';
import clientRoute from './routes/client';
import productRoute from './routes/product';
import orderRoute from './routes/order';

const app = express();
app.use(bodyParser.json());

app.use('/api/client', clientRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}.`);
});