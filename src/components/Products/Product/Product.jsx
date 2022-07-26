import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconBotton,
} from "@material-ui/core";
import { AddShopingCart } from "@material-ui/icons";

const Product = ({ product }) => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        <CardContent>
          <div>
            <Typography>{Product.name}</Typography>
          </div>
        </CardContent>
      </CardMedia>
    </Card>
  );
};

export default Product;
