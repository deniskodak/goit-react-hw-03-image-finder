import React from "react";
import { Button } from "./styled";

const ButtonLoadMore = ({ onIncrement }) => (
  <Button type="button" onClick={onIncrement}>
    Load More
  </Button>
);

export default ButtonLoadMore;
