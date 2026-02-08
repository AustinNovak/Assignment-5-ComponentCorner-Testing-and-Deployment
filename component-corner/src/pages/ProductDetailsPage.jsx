import { useParams } from "react-router-dom";

function ProductDetailsPage({ products }) {
  const { id } = useParams();

  const product = products.find(
    p => p.id === Number(id)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ maxWidth: "400px" }}
      />
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
  );
}

export default ProductDetailsPage;
