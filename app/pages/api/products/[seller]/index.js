import * as Nano from 'nano';

const nano = Nano(
  `http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@localhost:5984`
);
const products = nano.use('products');

export default async function getProducts(req, res) {
  const {
    query: { seller },
  } = req;
  const doclist = await products.find({
    selector: {
      seller: { $eq: seller },
    },
    limit: 50,
  });
  res.status(200).json(doclist);
}
