import React, { Component } from "react";

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map(product => (
      <div className="col-md-4">
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={e => this.props.handleAddToCard(e, product)}
          >
            <img src={`./products/${product.sku}.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <div>
            <b>{product.price}</b>
            <button
              className="btn btn-primary"
              onClick={e => this.props.handleAddToCard(e, product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ));
    return <div className="row">{productItems}</div>;
  }
}
