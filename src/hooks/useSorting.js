import { useState } from "react";
import { SortingOrders } from "../constants";

export default function useSorting(defaultSort) {
  const [order, setOrder] = useState(SortingOrders.Asc);
  const [sortBy, setSortBy] = useState(defaultSort);

  const changeSortingOrder = (value) => {
    setOrder(value);
  };

  const changeSortingColumn = (column) => {
    setSortBy(column);
  };

  return {
    order,
    sortBy,
    changeSortingColumn,
    changeSortingOrder,
  };
}
