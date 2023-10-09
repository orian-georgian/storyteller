import { useState } from "react";

export default function useFilters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const changeSearchQuery = (value) => {
    setSearch(value);
  };

  const changeStatusValue = (value) => {
    setStatus(value);
  };

  return {
    search,
    status,
    changeSearchQuery,
    changeStatusValue,
  };
}
