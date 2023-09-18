import "./VanBtn.css";
const VanBtn = ({ label, containerStyle }) => {
  const detectBg = (type) => {
    if (type === "simple") {
      return "#E17654";
    } else if (type === "rugged") {
      return "#115E59";
    } else if (type === "luxury") {
      return "#161616";
    } else {
      return "#FFEAD0";
    }
  };
  return (
    <button
      className="vans__filter"
      style={{
        background: `${containerStyle ? detectBg(containerStyle) : "#ffead0"}`,
        color: `${containerStyle ? "#fff" : "#161616"}`,
        textTransform: "capitalize",
        fontSize: "14px",
      }}
    >
      {label}
    </button>
  );
};

export default VanBtn;
