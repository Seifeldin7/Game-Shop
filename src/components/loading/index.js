import React from "react";

export default function Loading({ children, ...props }) {
  return (
    <div>
      <div className="d-flex justify-content-center center">
        <div
          className="spinner-border text-danger"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
        <div
          className="spinner-border text-warning"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
        <div
          className="spinner-border text-info"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
        <h2 style={{ color: "white" }}> Loading</h2>
      </div>
    </div>
  );
}
