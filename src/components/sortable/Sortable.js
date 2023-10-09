import Button from "../button/Button";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as ArrowsUpDown } from "../../assets/icons/arrows-up-down.svg";

import { SortingOrders } from "../../constants";

export default function Sortable({
  sortBy,
  column,
  children,
  order = SortingOrders.Asc,
  onOrderChanged,
  onColumnChanged,
}) {
  function handleSortChanged() {
    if (sortBy === column) {
      if (onOrderChanged) {
        onOrderChanged(
          order === SortingOrders.Asc ? SortingOrders.Desc : SortingOrders.Asc
        );
      }
    } else {
      if (onColumnChanged) {
        onColumnChanged(column);
      }
    }
  }

  return (
    <span className="flex-box gap-6">
      <span>{children}</span>
      <Button type="text" onClick={handleSortChanged}>
        {!!sortBy && sortBy !== column ? (
          <ArrowsUpDown width={14} height={14} />
        ) : order === SortingOrders.Asc ? (
          <ArrowUp width={11} height={11} />
        ) : (
          <ArrowDown width={11} height={11} />
        )}
      </Button>
      <span></span>
    </span>
  );
}
