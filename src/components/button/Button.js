import "./Button.scss";

export default function Button({
  text,
  icon,
  className,
  onClick,
  children,
  variant = "default",
  type = "contained",
  disabled = false,
}) {
  function handleClick(e) {
    if (onClick) {
      onClick(e);
    }
  }

  return (
    <button
      className={`storyteller-button ${variant} ${type} ${className ?? ""}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {icon}
      {!!text && <div>{text}</div>}
      {!text && !!children && children}
    </button>
  );
}
