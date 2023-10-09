import { BadgeTypes } from "./../../constants";

import "./Badge.scss";

export default function Badge({ text, type = BadgeTypes.Default }) {
  return <span className={`badge ${type}`}>{text}</span>;
}
