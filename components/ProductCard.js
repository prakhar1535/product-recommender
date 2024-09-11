export default function ProductCard({ product }) {
  // Helper function to safely get the price
  const getPrice = () => {
    if (product.pricing && product.pricing.currentPrice) {
      return product.pricing.currentPrice.toFixed(2);
    }
    return "N/A";
  };

  // Helper function to safely get the rating
  const getRating = () => {
    if (product.rating) {
      return `${product.rating}/5`;
    }
    return "Not rated";
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg flex flex-col">
      <img
        src={product.image || "/placeholder-image.jpg"}
        alt={product.title || "Product image"}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold mb-2">
        {product.title || "Untitled Product"}
      </h3>
      <p className="text-green-400 mb-2">${getPrice()}</p>
      <p className="text-yellow-400 mb-2">Rating: {getRating()}</p>
      {product.link && (
        <a
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 text-center"
        >
          Buy Now
        </a>
      )}
    </div>
  );
}
