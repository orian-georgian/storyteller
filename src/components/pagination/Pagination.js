import { NrOfRows } from "../../constants";
import Button from "../button/Button";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

import "./Pagination.scss";

export default function Pagination({
  page = 1,
  nrOfRows = 0,
  nrOfItems = 0,
  onNrOfRowsChanged,
  onPageChanged,
  onPrevPage,
  onNextPage,
}) {
  const totalPages = Math.ceil(nrOfItems / nrOfRows) || 0;

  function handlePageChange({ target: { value } }) {
    if (onPageChanged) {
      const number = parseFloat(value);
      const isValid =
        !isNaN(number) &&
        isFinite(number) &&
        number >= 1 &&
        number <= totalPages;

      if (isValid) {
        onPageChanged(Number(number));
      }
    }
  }

  function handleNrOfRowsChange({ target: { value } }) {
    if (onNrOfRowsChanged) {
      onNrOfRowsChanged(parseInt(value));
    }
  }

  function handlePrevPage() {
    if (onPrevPage && page > 1) {
      onPrevPage();
    }
  }

  function handleNextPage() {
    if (onNextPage && page < totalPages) {
      onNextPage();
    }
  }

  return (
    <div className="storyteller-pagination flex-box font-size-14">
      <span className="flex-box align-center gap-6">
        <span>Page</span>
        <input
          className="text-box"
          type="text"
          disabled={page === 1 && page === totalPages}
          value={page}
          onChange={handlePageChange}
        />
        <span>of</span>
        <span>{totalPages}</span>
      </span>
      <select
        className="select-box font-size-14"
        value={nrOfRows}
        onChange={handleNrOfRowsChange}
      >
        {NrOfRows.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <span className="group-buttons flex-box">
        <Button
          className="button-left"
          type="outlined"
          icon={<ArrowLeft width={14} height={14} />}
          disabled={page === 1}
          onClick={handlePrevPage}
        />
        <Button
          className="button-right"
          type="outlined"
          icon={<ArrowRight width={14} height={14} />}
          disabled={page === totalPages}
          onClick={handleNextPage}
        />
      </span>
    </div>
  );
}
