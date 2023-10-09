import spinner from "./../../assets/spinner.gif";

import "./Spinner.scss";

export default function Spinner({ text, visible }) {
  return visible ? (
    <div className="spinner-container">
      <img src={spinner} alt="Loadiing spinner" />
      {!!text && <span>{text}</span>}
    </div>
  ) : null;
}
