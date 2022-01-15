import React from "react";

import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Manta Jasmine Solteiro",
    description: "Manta de croche ponto Jasmine verde água",
    price: 234.99,
  },
  {
    id: "m2",
    name: "Tapete Tunisiano Pequeno",
    description: "Tapete de croche ponto tunisiano",
    price: 40,
  },
  {
    id: "m3",
    name: "Descanço de Mesa Circular",
    description: "Descanço de mesa de croche retangular",
    price: 45,
  },
  {
    id: "m4",
    name: "Almofada Jasmine",
    description: "Capa almofada de croche ponto Jasmine",
    price: 36,
  },
];

function AvailableProducts() {
  const productsList = DUMMY_MEALS.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableProducts;
