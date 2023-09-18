import { useOutletContext } from "react-router-dom";
import "./HostVanDetailsPricing.css";
const HostVanDetailsPricing = () => {
  const { price } = useOutletContext();

  return (
    <div className="hostvanDetails__pricing">
      ${price}
      <span>/day</span>
    </div>
  );
};

export default HostVanDetailsPricing;
