import { useState } from "react";
import { NrOfRows } from "../constants";

export default function usePagination() {
  const [page, setPage] = useState(1);
  const [nrOfRows, setNrOfRows] = useState(NrOfRows[1].value);

  const changeNrOfRows = (value) => {
    setNrOfRows(value);
    setPage(1);
  };

  const changePage = (pageNumber) => {
    setPage(pageNumber);
  };

  const getPrevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const getNextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  return {
    page,
    nrOfRows,
    changeNrOfRows,
    changePage,
    getPrevPage,
    getNextPage,
  };
}
