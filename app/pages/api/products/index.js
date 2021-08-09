import * as Nano from 'nano';

const nano = Nano(
  `http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@localhost:5984`
);
const products = nano.use('products');

export default async function getProducts(req, res) {
  if (req.method !== 'POST') {
    // Serve products
    const doclist = await products.list({ include_docs: true });
    res.status(200).json(doclist);
  } else {
    // Add product
    try {
      const { seller, name, description, price } = req.body;
      const response = await products.insert({
        seller,
        name,
        description,
        images: [],
        price: {
          amount: price.amount * 100,
          currency: price.currency,
        },
      });
      const product = await products.get(response.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
