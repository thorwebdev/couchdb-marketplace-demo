export default async function LogOut(req, res) {
  const response = await fetch('http://127.0.0.1:5984/_session', {
    headers: {
      accept: 'application/json',
    },
    body: null,
    method: 'DELETE',
  }).then((res) => res.json());
  console.log(response);
  res.status(200).json(response);
}
