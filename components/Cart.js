import ProductCard from "./ProductCard";
export default function Cart({ cart, budget }) {
  const getPrice = (product) => {
    if (product.pricing && product.pricing.currentPrice) {
      return product.pricing.currentPrice;
    }
    return 0;
  };

  const totalPrice = cart.reduce((sum, item) => sum + getPrice(item), 0);

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <p className="mb-4">Budget: ${budget || 0}</p>
      <p className="mb-4">Total: ${totalPrice.toFixed(2)}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cart.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
}
