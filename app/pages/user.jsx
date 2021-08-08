import ImageGrid from '../components/ImageGrid';
import { useUser } from '../utils/useUser';
import useSWR from 'swr';
import ProductForm from '../components/ProductForm';
import { useState } from 'react';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function UserPage() {
  const { session } = useUser();
  const { data, mutate } = useSWR(
    session ? `api/products/seller/${session.name}` : null,
    fetcher
  );

  const onProductAdded = (product) => {
    mutate({ docs: [...data.docs, product] });
  };

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1">
        <h1 className="text-6xl font-bold">Hey {session?.name} 👋</h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {!!data?.docs?.length && (
            <div>
              <h2 className="text-4xl font-bold">Your products:</h2>
              <ImageGrid products={data.docs} />
            </div>
          )}

          {session && (
            <ProductForm seller={session.name} onAdded={onProductAdded} />
          )}
        </div>
      </main>
    </div>
  );
}
