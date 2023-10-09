import { StoryStatuses } from "../../constants";

import "./Filters.scss";

const Statuses = Object.values(StoryStatuses);

export default function Filters({
  search,
  status,
  onSearchDone,
  onStatusChanged,
}) {
  function handleValueChanged({ target: { value } }) {
    if (onSearchDone) {
      onSearchDone(value);
    }
  }

  function handleStatusChanged({ target: { value } }) {
    if (onStatusChanged) {
      onStatusChanged(value);
    }
  }

  return (
    <div className="stories-filters flex-box align-center">
      <input
        className="text-box"
        placeholder="Search"
        type="text"
        value={search}
        onChange={handleValueChanged}
      />
      <select
        className="select-box font-size-14"
        value={status}
        onChange={handleStatusChanged}
      >
        <option value="">All Statuses</option>
        {Statuses.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
