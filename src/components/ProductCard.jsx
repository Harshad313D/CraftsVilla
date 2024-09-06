// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="p-4 rounded-md shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="text-red-700 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
