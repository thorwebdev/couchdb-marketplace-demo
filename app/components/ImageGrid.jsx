function formatAmountForDisplay(amount, currency) {
  let numberFormat = new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false;
    }
  }
  const amountToFormat = zeroDecimalCurrency ? amount : amount / 100;
  return numberFormat.format(amountToFormat);
}

export default function ImageGrid({ products }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {products.map((product) => (
        <li key={product._id} className="relative">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img
              src={product.images[0] ?? 'https://via.placeholder.com/200'}
              alt=""
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">{`View details for ${product.name}`}</span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
            {product.name}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {formatAmountForDisplay(
              product.price.amount,
              product.price.currency
            )}
          </p>
        </li>
      ))}
    </ul>
  );
}
