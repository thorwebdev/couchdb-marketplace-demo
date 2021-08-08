import ImageGrid from '../components/ImageGrid';
import { useUser } from '../utils/useUser';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ products }) {
  const { searchTerm } = useUser();
  const { data } = useSWR(
    searchTerm ? `api/products/q/${searchTerm}` : null,
    fetcher
  );

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1">
        <h1 className="text-6xl font-bold">CouchDB marketplace demo</h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <ImageGrid products={data ? data.docs : products} />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/products').then(
    (res) => res.json()
  );
  const products = response.rows.map((res) => res.doc);
  return {
    props: { products },
  };
}
