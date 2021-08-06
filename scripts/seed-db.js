require('dotenv').config({ path: './client/.env.local' });
const nano = require('nano')(
  `http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@localhost:5984`
);

const seedDB = async () => {
  try {
    try {
      await nano.db.destroy('products');
    } catch (error) {
      console.log(error.description);
    }
    await nano.db.create('products');
    const products = nano.use('products');
    const response = await products.insert({
      seller: 'admin',
      name: 'Banana',
      description: 'A curvy yellow fruit.',
      images: [
        'https://image.shutterstock.com/image-photo/bananas-grapes-600w-518328943.jpg',
      ],
      price: {
        amount: 299,
        currency: 'sgd',
      },
    });
    // succeeded
    console.log(response);
    // Create users table
    await nano.db.create('_users');
  } catch (e) {
    // failed
    console.error(e);
  }
};

seedDB();
