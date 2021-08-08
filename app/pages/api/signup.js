import * as Nano from 'nano';

const nano = Nano({
  url: 'http://localhost:5984',
  requestDefaults: {
    jar: true,
  },
});

export default async function SignUp(req, res) {
  if (req.method !== 'POST') res.status(403).json({ error: 'Forbidden' });

  const { name, password } = req.body;

  const response = await fetch(
    `http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@localhost:5984/_users/org.couchdb.user:${name}`,
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password,
        roles: ['user'],
        type: 'user',
      }),
      method: 'PUT',
    }
  ).then((res) => res.json());
  console.log(response);
  if (response.ok) {
    const session = await nano.auth(name, password);
    res.status(200).json(session);
  } else {
    res.status(200).json(response);
  }
}
