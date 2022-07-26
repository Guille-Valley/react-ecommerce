import React from "react";
import Grid from "@material-ui/core";

import Product from "./Product/Product";
const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        <Product product={product} />
      </Grid>
    </main>
  );
};

export default Products;
