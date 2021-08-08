import * as Nano from 'nano';

const nano = Nano({
  url: 'http://localhost:5984',
  requestDefaults: {
    jar: true,
  },
});

export default async function getSession(req, res) {
  const session = await nano.session();
  res.status(200).json(session.userCtx);
}
