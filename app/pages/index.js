import Head from 'next/head';
import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, error } = useSWR(
    searchTerm ? `api/products/q/${searchTerm}` : null,
    fetcher
  );
  if (error) console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>CouchDB marketplace demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
        <h1 className="text-6xl font-bold">CouchDB marketplace demo</h1>

        <div className="mt-5 relative flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Quick search"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <ImageGrid products={data ? data.docs : products} />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
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
