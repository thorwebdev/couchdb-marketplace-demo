import ImageGrid from '../components/ImageGrid';
import { useUser } from '../utils/useUser';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UserPage() {
  const { session } = useUser();
  const { data, error } = useSWR(
    session ? `api/products/seller/${session.name}` : null,
    fetcher
  );
  if (error) console.log(error);

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1">
        <h1 className="text-6xl font-bold">Hey {session?.name} 👋</h1>

        {data && (
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <ImageGrid products={data.docs} />
          </div>
        )}
      </main>
    </div>
  );
}
