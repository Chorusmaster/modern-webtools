import express from 'express';
import cors from 'cors';
import type { Product } from '../src/types/product.ts';
import type { Item } from '../src/types/item.ts';

const app = express();
const port = 3000;
let basket:Array<Item> = [];

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());


app.post('/api/basket/', (req, res) => {
  const product: Product = req.body;
  if (!req.body?.name || !req.body?.price || !req.body?.img) {
    return res.status(400).json({ error: 'Invalid product' });
  }
  const existing: Item | undefined = basket.find((item: Item) => item.product.name === product.name)

  if (existing) {
    existing.quantity++;
  } else {
    const item: Item = {
      product: product,  
      quantity: 1
    };
    basket.push(item);
  }

  res.json(basket);
});

app.get('/api/basket/', (req, res) => {
  res.json(basket);
});

app.delete('/api/basket/:index', (req, res) => {
  const index = Number(req.params.index);

  if (isNaN(index) || index < 0 || index >= basket.length) {
    return res.status(400).json({ error: 'Invalid index' });
  }

  basket.splice(index, 1);

  res.json(basket);
});

app.delete('/api/basket', (req, res) => {
  basket = [];

  res.json(basket);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Page not found' });
});


app.listen(port, () => {
  console.log(`Backend server is listening at port ${port}`);
});