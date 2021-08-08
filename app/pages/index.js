import Head from 'next/head';
import { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import useSWR from 'swr';
import { useUser } from '../utils/useUser';
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ products }) {
  const { searchTerm } = useUser();
  const { data, error } = useSWR(
    searchTerm ? `api/products/q/${searchTerm}` : null,
    fetcher
  );
  if (error) console.log(error);

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>CouchDB marketplace demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1">
        <h1 className="text-6xl font-bold">CouchDB marketplace demo</h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <ImageGrid products={data ? data.docs : products} />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://thor.news"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by thorwebdev ⚡️
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
