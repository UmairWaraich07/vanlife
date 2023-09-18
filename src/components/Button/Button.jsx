import { Link } from "react-router-dom";
import "./Button.css";
const Button = ({ label, link, fullWidth, black, type, isDisabled }) => {
  return (
    <button
      type={`${type ? { type } : "button"}`}
      className="btn"
      disabled={isDisabled}
      style={{
        background: `${black ? "#161616" : "#FF8C38"}`,
        width: `${fullWidth ? "100%" : "inherit"}`,
      }}
    >
      <Link to={link}>{label}</Link>
    </button>
  );
};

export default Button;
