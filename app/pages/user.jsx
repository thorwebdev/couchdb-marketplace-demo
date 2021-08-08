import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Test() {
  const { data, error } = useSWR('api/session', fetcher);
  console.log({ data, error });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
