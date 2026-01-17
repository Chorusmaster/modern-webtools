import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
let basket:string = "";

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

app.get('/api/products/', (req, res) => {
  basket = JSON.stringify(req.body, null, 2);
});

app.post('/api/products/', (req, res) => {
  res.send(JSON.parse(basket));
});

app.listen(port, () => {
  console.log(`Backend server is listening at port ${port}`);
});