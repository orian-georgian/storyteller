import moment from "moment";

export default function Title({ title, liveFrom }) {
  const date = liveFrom
    ? moment(liveFrom).format("MMMM D")
    : "No publish date set";

  return (
    <>
      <div className="text-blue">{title}</div>
      <div className="text-gray">({date})</div>
    </>
  );
}
