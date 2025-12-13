import { productsTypes } from "../../types";

function ProductCard({ product }: { product: productsTypes }) {
  return (
    <>
      <div className="card m-3" style={{ width: "15rem", height: "20rem" }}>
        <div className="product-img" style={{ aspectRatio: "1/1" }}>
          <img
            className="card-img-top p-2 "
            src={product.product_img || "#"}
            alt={product.product_name}
          />e
        </div>
        <div className="text-start">
          <div className="card-body ">
            <div className="card-title mb-2">
              <h2 className="h5">{product.product_name}</h2>
            </div>
            <div className="mb-2">
              <p className="card-text">{product.product_description}</p>
            </div>

            <div className="card-subtitle mb-2 text-muted">
              <p className="mb-1">Rating : ⭐ {product.product_rating} / 5.0</p>
            </div>
            <div className="mb-2">
              <p className="m-0">
                <span className="fw-bold">
                  {" "}
                  Price : ₹{product.product_price}{" "}
                </span>
                <span
                  className="text-danger fw-bold"
                  style={{ textDecoration: "line-through" }}
                >
                  {product.sale_price}
                </span>
              </p>
            </div>
            <div className="">in stock or not</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
