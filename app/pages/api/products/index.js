import * as Nano from 'nano';

const nano = Nano(
  `http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@localhost:5984`
);
const products = nano.use('products');

export default async function getProducts(req, res) {
  const doclist = await products.list({ include_docs: true });
  res.status(200).json(doclist);
}
