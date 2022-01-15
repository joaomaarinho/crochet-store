import React from "react";

import classes from './ProductsSummary.module.css'

function ProductsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Beautiful Crochet Products</h2>
      <p>Choose your favorite crochet work from our broad selection of available products</p>
      <p>All products are handmade with the best yarn, a lot of love and care</p>
    </section>
  );
}

export default ProductsSummary;
