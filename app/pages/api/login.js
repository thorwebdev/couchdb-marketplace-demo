import * as Nano from 'nano';

const nano = Nano({
  url: 'http://localhost:5984',
  requestDefaults: {
    jar: true,
  },
});

export default async function LogIn(req, res) {
  if (req.method !== 'POST') res.status(403).json({ error: 'Forbidden' });
  try {
    const { name, password } = req.body;
    const session = await nano.auth(name, password);
    console.log(session);
    res.status(200).json(session);
  } catch (error) {
    console.log(error);
    res.status(200).json(error);
  }
}
