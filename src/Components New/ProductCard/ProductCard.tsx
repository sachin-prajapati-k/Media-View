import ClickEvent from "../../BasicEvents/ClickEvent";
import { productsTypes } from "../../types";

function ProductCard({ product }: { product: productsTypes }) {
  return (
    <>
      <div
        className="card m-2 text-start "
        style={{ width: "15rem", height: "20rem", overflow: "hidden" }}
      >
        <div className="product-img mb-0">
          <img
            className="card-img"
            src={product.product_img || "#"}
            alt={product.product_name}
            style={{ width: "100%", height: "100px", borderRadius: "5px" }}
          />
        </div>

        <div className="m-2 mb-0 ">
          <p className="fs-6 fw-bold">{product.product_name}</p>
          <div className="text-truncate">
            <p
              className="card-text"
              style={{ fontSize: "14px", lineHeight: "20px" }}
            >
              {product.product_description}
            </p>
          </div>

          <div className="text-muted " style={{ fontSize: "12px" }}>
            <p className="mb-1">Rating : ⭐ {product.product_rating} / 5.0</p>
          </div>

          <p className="mb-0">
            <span className="fw-bold">Price : ₹{product.product_price} </span>
            <span
              className="text-danger fw-bold"
              style={{ textDecoration: "line-through" }}
            >
              {product.sale_price}
            </span>
          </p>
          <div style={{ position: "absolute", bottom: 4 }}>
            <ClickEvent />
          </div>
          {/* <div className="">in stock or not</div> */}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
