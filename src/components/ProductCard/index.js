import React from "react";

import "./ProductCard.scss";

export default function ProductCard() {
  return (
    <div className="make-3D-space">
      <div className="product-card">
        <div className="product-front">
          <div className="shadow"></div>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png"
            alt=""
          />
          <div className="image_overlay"></div>
          <div className="view_details">
            <span>View Details</span>
          </div>
          <div className="stats">
            <div className="stats-container">
              <span className="product_price">$39</span>
              <span className="product_name">AdclassNameas Originals</span>
              <p>Men's running shirt</p>

              <div className="product-options">
                <strong>SIZES</strong>
                <span>XS, S, M, L, XL, XXL</span>
                <strong>COLORS</strong>
                <div className="colors">
                  <div className="c-blue">
                    <span></span>
                  </div>
                  <div className="c-red">
                    <span></span>
                  </div>
                  <div className="c-white">
                    <span></span>
                  </div>
                  <div className="c-green">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
