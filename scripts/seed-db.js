require('dotenv').config({ path: './app/.env.local' });
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
    const responses = await Promise.all([
      products.insert({
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
      }),
      products.insert({
        seller: 'admin',
        name: 'Boat',
        description: 'A floating vessel.',
        images: ['https://images.unsplash.com/photo-1544634043-dde2dc1b3813'],
        price: {
          amount: 5500000,
          currency: 'sgd',
        },
      }),
    ]);
    // succeeded
    console.log(responses);
    // Create users table
    await nano.db.create('_users');
  } catch (e) {
    // failed
    console.error(e);
  }
};

seedDB();
