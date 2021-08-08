import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ children, ...props }) {
  const { product } = props;
  return (
    <div>
      <div className="col mb-4">
        <div className="card">
          <img
            src={product.image}
            className="card-img-top"
            alt="game"
            style={{ maxHeight: "15rem" }}
          />
          <div className="card-body" style={{ backgroundColor: "#2E3B45" }}>
            <h5 className="card-title" style={{ color: "white" }}>
              {product.name}
            </h5>
            <p className="card-text" style={{ color: "white" }}>
              {product.description}
            </p>
            <p>
              <span
                style={{
                  color: "#FFDC11",
                  fontWeight: "bold",
                  fontSize: "2rem",
                }}
              >
                ${product.price}
              </span>{" "}
            </p>
            <Link
              to={"./products/" + props.product.id}
              className="btn btn-primary"
            >
              <i className="fa fa-info"></i>{" "}
              <span className="details">Go Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
