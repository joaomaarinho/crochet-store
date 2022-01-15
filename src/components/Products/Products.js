import React from "react";
import ProductsSummary from "./ProductsSummary";
import AvailableProducts from "./AvailableProducts";
import { Fragment } from "react/cjs/react.production.min";

function Products() {
  return (
    <Fragment>
      <ProductsSummary />
      <AvailableProducts />
    </Fragment>
  );
}

export default Products;
