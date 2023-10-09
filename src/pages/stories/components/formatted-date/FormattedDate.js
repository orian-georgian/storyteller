import moment from "moment";

export default function FormattedDate({ date, className }) {
  const formattedDate = date ? moment(date).format("MMM D, h:mm A") : "__";

  return <div className={className}>{formattedDate}</div>;
}
